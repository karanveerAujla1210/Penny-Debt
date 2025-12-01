const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage(); // don't store on disk

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Invalid file type. Only PDF, JPEG, PNG allowed'), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits: { 
    fileSize: 5 * 1024 * 1024, // 5MB max
    files: 5 // max 5 files per request
  },
  fileFilter
});

module.exports = { upload };
