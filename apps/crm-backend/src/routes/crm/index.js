const express = require('express');
const router = express.Router();

const leadsRouter = require('./leads');
const casesRouter = require('./cases');
const loansRouter = require('./loans');
const programsRouter = require('./programs');
const settlementsRouter = require('./settlements');

router.use('/leads', leadsRouter);
router.use('/cases', casesRouter);
router.use('/loans', loansRouter);
router.use('/programs', programsRouter);
router.use('/settlements', settlementsRouter);

module.exports = router;
