const express = require('express');
const { Mentor } = require('../db/models');
const file = require('../middleware/file');

const router = express.Router();

router.post('/', file.single('crop'), async (req, res) => {
  try {
    console.log(req.file);
    if (req.file) {
      const id = Number(req.file.originalname);
      console.log(id);
      const fileName = req.file.filename;
      await Mentor.update(
        { photo: fileName },
        { where: { id } },
      );
      const mentorUpt = await Mentor.findOne({ where: { id } });
      // await Mentor.create({ photo: filePath.substring(7) });
      res.json(mentorUpt);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
