const express = require('express');
const { Mentor } = require('../db/models');
const { Student } = require('../db/models');

const router = express.Router();

// show mentor
router.get('/mentorprofile', async (req, res) => {
  try {
    const { id } = req.session.user;
    const mentor = await Mentor.findOne({ where: { id } });
    res.json(mentor);
  } catch (error) {
    console.log(error);
  }
});

// edit mentor
router.patch('/mentorprofile', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    zoom,
    phone,
    video,
    call,
    chat,
    price,
    education,
    job,
    profArea,
    profScill,
    aboutMe,
    portfolio,
  } = req.body;
  try {
    const { id } = req.session.user;
    await Mentor.update({
      firstName,
      lastName,
      email,
      zoom,
      phone,
      video,
      call,
      chat,
      price,
      education,
      job,
      profArea,
      profScill,
      aboutMe,
      portfolio,
    }, { where: { id } });
    const userUpdate = await Mentor.findOne({ where: { id } });
    req.session.user = {
      id: userUpdate.id, firstName: userUpdate.firstName, lastName: userUpdate.lastName, zoom: userUpdate.zoom, phone: userUpdate.phone, email: userUpdate.email, video: userUpdate.video, call: userUpdate.call, chat: userUpdate.chat, price: userUpdate.price, education: userUpdate.education, job: userUpdate.job, profArea: userUpdate.profArea, profScill: userUpdate.profScill, aboutMe: userUpdate.aboutMe, portfolio: userUpdate.portfolio, mentor: true, photo: userUpdate.photo,
    };
    res.json(req.session.user);
  } catch (err) {
    console.log(err);
  }
});

// show all mentor for application
router.get('/applications', async (req, res) => {
  try {
    const allMentor = await Mentor.findAll();
    res.json(allMentor);
  } catch (error) {
    console.log(error);
  }
});

router.get('/studentprofile', async (req, res) => {
  try {
    const { id } = req.session.user;
    const student = await Student.findOne({ where: { id } });
    res.json(student);
  } catch (error) {
    console.log(error);
  }
});

// edit student
router.patch('/studentprofile', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    zoom,
    phone,
  } = req.body;
  try {
    const { id } = req.session.user;
    await Student.update({
      firstName,
      lastName,
      email,
      zoom,
      phone,
    }, { where: { id } });
    const userUpdate = await Student.findOne({ where: { id } });
    console.log(userUpdate);
    res.json(userUpdate);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
