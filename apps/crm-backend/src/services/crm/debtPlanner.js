const { DebtAccount, DebtPlan, DebtPlanItem, IncomeExpenseProfile } = require('../../models');

/**
 * Simple debt planner service
 * - fetchDebtAccounts(customerId): returns debt accounts
 * - buildProposal(caseId, options): builds a basic settlement proposal
 */
async function fetchDebtAccounts(customerId) {
  return DebtAccount.find({ customerId }).lean();
}

async function calculateTotals(accounts = []) {
  const totals = accounts.reduce(
    (acc, a) => {
      acc.original += a.originalPrincipal || 0;
      acc.current += a.currentPrincipal || 0;
      return acc;
    },
    { original: 0, current: 0 }
  );
  return totals;
}

async function buildProposal({ caseId, customerId, strategy = 'SETTLEMENT', discountPct = 0.4, createdBy = null }) {
  // Fetch accounts
  const accounts = await fetchDebtAccounts(customerId || null);
  const totals = await calculateTotals(accounts);

  // naive settlement calculation: propose discountPct of current principal
  const proposedSettlementAmount = Math.round(totals.current * (1 - discountPct));
  const expectedMonthlyContribution = Math.max(1000, Math.round(proposedSettlementAmount / 12));

  // create DebtPlan
  const plan = new DebtPlan({
    caseId,
    planVersion: 1,
    strategyType: strategy,
    totalOutstanding: totals.current,
    proposedSettlementAmount,
    tenureMonths: 12,
    expectedMonthlyContribution,
    status: 'DRAFT',
    createdBy
  });

  await plan.save();

  // create plan items per account
  for (const acc of accounts) {
    const item = new DebtPlanItem({
      debtPlanId: plan._id,
      debtAccountId: acc._id,
      lenderOfferAmount: Math.round((acc.current || 0) * (1 - discountPct)),
      customerContribution: Math.round((acc.current || 0) * (1 - discountPct)),
      waiverAmount: Math.round((acc.current || 0) * discountPct)
    });
    await item.save();
    plan.items.push(item._id);
  }

  await plan.save();
  return plan;
}

module.exports = { fetchDebtAccounts, calculateTotals, buildProposal };
