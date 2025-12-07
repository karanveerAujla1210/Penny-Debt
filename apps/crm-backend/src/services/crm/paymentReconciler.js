const { Payment, Loan } = require('../../models');

/**
 * Reconcile payments for a loan: compute total paid, last payment date, and update loan status heuristically.
 * This is lightweight and intended as a helper; controllers should call it where needed.
 */
async function reconcilePaymentsForLoan(loanId) {
  if (!loanId) throw new Error('loanId required');
  const payments = await Payment.find({ loanId }).sort({ paidDate: 1 }).lean();
  const totalPaid = payments.reduce((s, p) => s + (p.amount || 0), 0);
  const lastPayment = payments.length ? payments[payments.length - 1].paidDate : null;

  // Update loan summary fields if loan exists
  const loan = await Loan.findById(loanId);
  if (loan) {
    loan.__meta = loan.__meta || {};
    loan.__meta.totalPaid = totalPaid;
    loan.__meta.lastPaymentDate = lastPayment;
    // mark loan as 'ACTIVE' if payments exist and outstanding > 0
    if (totalPaid > 0 && loan.details && loan.details.currentOutstanding > 0) {
      loan.status = loan.status || {};
      // keep existing dpdStatus when present
      // we do not overwrite dpdStatus here; this is a lightweight annotation
    }
    await loan.save();
  }

  return { totalPaid, lastPayment, paymentsCount: payments.length };
}

module.exports = { reconcilePaymentsForLoan };
