const multer = require('multer');

// создаем пространство, где будут храниться фото
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../client/public/photos');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}.png`);
  },
});

// валидация загружаемых файлов
const types = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'];

// фильтрация загружаемых файлов
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
