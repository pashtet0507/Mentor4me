const express = require('express');
const { Review, Student } = require('../db/models');

const router = express.Router();

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = req.session.user.id;
  console.log('id', id);
  console.log('userId', userId);
  const {
    comment, rating,
  } = req.body;
  console.log('req.body', req.body);
  try {
    const review = await Review.create({
      comment, rating, mentor_id: id, student_id: userId,
    });
    const allReviews = await Review.findAll({ where: { mentor_id: id }, order: [['id', 'DESC']], include: Student });
    res.json(allReviews);
  } catch (error) {
    console.log(error);
  }
});

// show all reviews
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const allReviews = await Review.findAll({ where: { mentor_id: id }, order: [['id', 'DESC']], include: Student });
    res.json(allReviews);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
