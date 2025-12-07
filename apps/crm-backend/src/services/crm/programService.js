const { Program, Loan } = require('../../models');

/**
 * Recalculate program totals (enrolledDebt, expectedSavings) from linked loans.
 * Keeps the controller thin by encapsulating the business logic here.
 */
async function recalcProgramTotals(programId) {
  if (!programId) throw new Error('programId required');
  const program = await Program.findById(programId);
  if (!program) throw new Error('Program not found');

  const loanIds = (program.loans || []).map(l => l.loanId).filter(Boolean);
  const loans = await Loan.find({ _id: { $in: loanIds } }).lean();

  const enrolledDebt = loans.reduce((s, l) => s + ((l.details && l.details.currentOutstanding) || 0), 0);
  const expectedSavings = enrolledDebt - (program.loans || []).reduce((s, it) => s + ((it.targetSettlementAmount) || 0), 0);

  program.totals = program.totals || {};
  program.totals.enrolledDebt = enrolledDebt;
  program.totals.expectedSavings = expectedSavings;
  await program.save();

  return { enrolledDebt, expectedSavings };
}

module.exports = { recalcProgramTotals };
