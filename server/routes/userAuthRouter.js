const express = require('express');
const { hash, compare } = require('bcrypt');
const { Student, Mentor } = require('../db/models');

const router = express.Router();

router.post('/student', async (req, res) => {
  const {
    firstName, lastName, email, zoom, phone, password,
  } = req.body;
  console.log(req.body, 'studeeeeent');
  try {
    const hashPassword = await hash(password, 10);
    const student = await Student.create({
      firstName, lastName, email, zoom, phone, password: hashPassword,
    });
    req.session.user = {
      id: student.id, firstName: student.firstName, lastName: student.lastName, mentor: false, email, zoom, phone, photo: null,
    };
    res.json(req.session.user);
  } catch (error) {
    console.log(error);
  }
});

router.post('/mentor', async (req, res) => {
  console.log(req.body, 'mentoooor');
  const {
    firstName, lastName, email, zoom, phone, video, call, chat, price, password, education, job, profArea, profScill, aboutMe, portfolio,
  } = req.body;
  try {
    const hashPassword = await hash(password, 10);
    const mentor = await Mentor.create({
      firstName, lastName, email, zoom, phone, video, call, chat, price, password: hashPassword, education, job, profArea, profScill, aboutMe, portfolio, photo: null,
    });
    req.session.user = {
      id: mentor.id, firstName: mentor.firstName, lastName: mentor.lastName, video, call, chat, price, education, job, profArea, profScill, aboutMe, portfolio, mentor: true, photo: mentor.photo,
    };
    res.json(req.session.user);
  } catch (error) {
    console.log(error);
  }
});

router.get('/check', async (req, res) => {
  try {
    if (req.session.user) {
      if (req.session.user.mentor === true) {
        const userMentor = await Mentor.findOne({ where: { id: req.session.user.id } });
        userMentor.dataValues.mentor = true;
        return res.json(userMentor);
      }
      const userStudent = await Student.findOne({ where: { id: req.session.user.id } });
      return res.json(userStudent);
    }
    return res.json({});
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  const { email, password, isMentor } = req.body;
  console.log(req.body);
  try {
    if (isMentor) {
      const findOneMentor = await Mentor.findOne({
        where: {
          email,
        },
      });
      console.log(findOneMentor);
      const isValid = await compare(password, findOneMentor.password);
      if (isValid) {
        req.session.user = {
          id: findOneMentor.id, firstName: findOneMentor.firstName, lastName: findOneMentor.lastName, email: findOneMentor.email, zoom: findOneMentor.zoom, phone: findOneMentor.phone, video: findOneMentor.video, call: findOneMentor.call, chat: findOneMentor.chat, price: findOneMentor.price, education: findOneMentor.education, job: findOneMentor.job, profArea: findOneMentor.profArea, profScill: findOneMentor.profScill, aboutMe: findOneMentor.aboutMe, portfolio: findOneMentor.portfolio, photo: findOneMentor.photo, mentor: true,
        };
        return res.json(req.session.user);
      }
      return res.json({});
    }
    const findOneStudent = await Student.findOne({
      where: {
        email,
      },
    });
    const isValid = await compare(password, findOneStudent.password);
    if (isValid) {
      req.session.user = {
        id: findOneStudent.id, firstName: findOneStudent.firstName, lastName: findOneStudent.lastName, mentor: false, email: findOneStudent.email, zoom: findOneStudent.zoom, phone: findOneStudent.phone, photo: findOneStudent.photo,
      };
      return res.json(req.session.user);
    }
    res.json({});
  } catch (err) {
    console.log(err);
    res.json({});
  }
});

router.get('/logout', (req, res) => {
  try {
    res.clearCookie('sid', { domain: 'localhost', path: '/' });
    req.session.destroy();
    res.json({});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
