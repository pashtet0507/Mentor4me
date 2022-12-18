const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Mentor } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const searchObj = req.body;
  if (searchObj.obj.call === undefined && searchObj.obj.video === undefined && searchObj.obj.chat === undefined) {
    searchObj.obj.call = 'on';
    searchObj.obj.video = 'on';
    searchObj.obj.chat = 'on';
    console.log(searchObj.obj);
  }
  try {
    const allMentorsSearch = await Mentor.findAll({
      where: Sequelize.and(
        Sequelize.or(
          { call: { [Op.eq]: searchObj.obj?.call } },
          { video: { [Op.eq]: searchObj.obj?.video } },
          { chat: { [Op.eq]: searchObj.obj?.chat } },
        ),
        {
          price: {
            [Op.gte]: searchObj.valueOn[0],
            [Op.lte]: searchObj.valueOn[1],
          },
        },
        { profScill: { [Op.iLike]: `%${searchObj.obj?.title}%` } },
        // { profScill: searchObj.obj?.title },

      ),
    });
    console.log(allMentorsSearch);
    res.json(allMentorsSearch);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
