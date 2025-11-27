const express = require('express');
const router = express.Router();

// Receives CSP violation reports from browsers
// Content-Type can be 'application/csp-report' or 'application/json'
router.post('/', express.json({ type: ['application/csp-report', 'application/json'] }), (req, res) => {
  try {
    const report = req.body && Object.keys(req.body).length ? req.body : null;
    // If the browser sends { "csp-report": { ... } }, normalize it
    const normalized = report && report['csp-report'] ? report['csp-report'] : report;
    console.warn('CSP Violation Report received:', JSON.stringify(normalized, null, 2));

    // TODO: store reports in a log store or monitoring system if required

    // Per spec, return 204 No Content
    return res.status(204).end();
  } catch (err) {
    console.error('Failed to process CSP report:', err);
    return res.status(500).json({ success: false });
  }
});

module.exports = router;
