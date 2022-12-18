const express = require('express');
const {
  Application, Review, Student, Status, Mentor,
} = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const userId = req.session.user.id;
  const {
    video, call, chat, text,
  } = req.body.input;
  const { id } = req.body;
  console.log('video:', video, 'call:', call, 'chat:', chat, 'text:', text);
  try {
    const application = await Application.create({
      text, mentor_id: id, student_id: userId, video, call, chat,
    });
    const applicationStatus = await Status.create({
      application_id: application.id, status: null,
    });
    res.json(applicationStatus);
  } catch (error) {
    console.log(error);
  }
});

router.get('/student', async (req, res) => {
  const findAllApplications = await Application.findAll({
    where: {
      student_id: req.session.user.id,
    },
    include: [{ model: Status }, { model: Mentor }],
  });
  res.json(findAllApplications);
});

router.get('/mentor', async (req, res) => {
  const findAllApplications = await Application.findAll({
    where: {
      mentor_id: req.session.user.id,
    },
    include: [{ model: Status }, { model: Student }],
  });
  res.json(findAllApplications);
});

router.post('/status', async (req, res) => {
  const { status, comments, application_id } = req.body;
  await Status.update({ status, comments }, { where: { application_id } });
  const findAllApplications = await Application.findAll({
    where: {
      mentor_id: req.session.user.id,
    },
    include: [{ model: Status }, { model: Student }],
  });
  res.json(findAllApplications);
});

module.exports = router;
