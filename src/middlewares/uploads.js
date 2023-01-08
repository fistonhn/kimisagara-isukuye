const multer = require('multer');

const storage = multer.diskStorage({

  destination(req, file, cb) {
    cb(null, './uploads');
  },

  filename(req, file, cb) {
    cb(null, new Date().getTime() / 1000 + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fieldSize: 1024 * 1024 * 10,
  },
}).fields([{ name: 'facemappingSketchImg', maxCount: 50 }, { name: 'photos', maxCount: 50 }]);

module.exports = upload;
