const express = require('express');
const { Student } = require('../db/models');
const file = require('../middleware/file');

const router = express.Router();
router.post('/', file.single('crop'), async (req, res) => {
  try {
    if (req.file) {
      const id = Number(req.file.originalname);
      const fileName = req.file.filename;
      await Student.update(
        { photo: fileName },
        { where: { id } },
      );
      const studentUpt = await Student.findOne({ where: { id } });
      // await Mentor.create({ photo: filePath.substring(7) });
      res.json(studentUpt);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
