const express = require('express');
const { Event } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const {
      start, end, title, text,
    } = req.body;
    // const startDate = start.split(' ').map((el, ind) => (!ind ? el.split('/').reverse() : el.split(':'))).flat();
    // startDate[1] = Number(startDate[1]) - 1;
    // const endDate = end.split(' ').map((el, ind) => (!ind ? el.split('/').reverse() : el.split(':'))).flat();
    // endDate[1] = Number(endDate[1]) - 1;
    // console.log(startDate, endDate);
    // const aaaa = '09/12/2022';
    // const str = `${start.replace(/(\d+)\/(\d+)\/(\d+)./, '$3-$2-$1T')}.000Z`;
    // console.log(str);
    // console.log('sdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgf', start, end);
    const event = await Event.create({
      start: new Date(start),
      end: new Date(end),
      title,
      text,
      user_id: req.session.user.id,
    });
    res.json(event);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    await Event.destroy({ where: { id } });
    res.json({});
  } catch (e) {
    console.log(e);
    res.json({});
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title, text, start, end,
    } = req.body;
    console.log('Patching req.body:', req.body);
    await Event.update({
      title, text, start: new Date(start), end: new Date(end),
    }, { where: { id } });
    const newEvent = await Event.findByPk(id);
    res.json(newEvent);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
