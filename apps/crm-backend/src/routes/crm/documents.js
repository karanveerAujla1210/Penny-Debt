const express = require('express');
const router = express.Router();
const Document = require('../../../models/Document');
const upload = require('../../../middleware/fileUpload');
const { checkPermission } = require('../../../middleware/rbac');
const { body, param, validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

const createDocValidator = [
  body('customerId').isMongoId().withMessage('Invalid customer ID'),
  body('type').isIn(['PAN', 'AADHAAR', 'BANK_STATEMENT', 'SALARY_SLIP', 'LOAN_STATEMENT', 'PROGRAM_AGREEMENT', 'NOC', 'LEGAL_NOTICE', 'OTHER']).withMessage('Invalid document type')
];

router.post('/', checkPermission('create:document'), upload.single('file'), createDocValidator, validate, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const document = new Document({
      customerId: req.body.customerId,
      type: req.body.type,
      fileName: req.file.originalname,
      fileUrl: `/uploads/${req.file.filename}`,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
      uploadedBy: req.user._id,
      relatedEntity: req.body.relatedEntity ? {
        entityType: req.body.entityType,
        entityId: req.body.entityId
      } : undefined
    });

    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', checkPermission('view:document'), async (req, res) => {
  try {
    const { customerId, type, verified } = req.query;
    const filter = {};
    if (customerId) filter.customerId = customerId;
    if (type) filter.type = type;
    if (verified !== undefined) filter.verified = verified === 'true';

    const documents = await Document.find(filter)
      .populate('customerId', 'basic.fullName')
      .populate('uploadedBy', 'email')
      .sort({ createdAt: -1 });

    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id/verify', checkPermission('verify:document'), async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(
      req.params.id,
      { 
        verified: true, 
        verifiedBy: req.user._id 
      },
      { new: true }
    );
    if (!document) return res.status(404).json({ error: 'Document not found' });
    res.json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
