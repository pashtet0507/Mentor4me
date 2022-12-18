import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { postReview, showReviews } from '../../../redux/reviewsSlice';
import OneApplicationMentor from '../../OneApplicationMentor/OneApplicationMentor';
import './OneMentorPage.css';
import { showAllMentor } from '../../../redux/userInfoSlice';
import { getApplication } from '../../../redux/applicationSlice';

export default function OneMentorPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allMentors = useSelector((store) => store.userInfo);
  const oneMentor = allMentors.filter((mentor) => Number(mentor.id) === Number(id));
  // ниже код для пагинации reviews
  const reviews = useSelector((store) => store.reviews);
  const [numberReviews, setNumberReviews] = useState(3);
  const currReviews = reviews.slice(0, numberReviews);
  useEffect(() => {
    dispatch(showAllMentor());
  }, []);

  useEffect(() => {
    dispatch(showReviews(id));
  }, []);

  /// /// ниже логика модалки
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /// / ниже логика на отправку отзыва

  const [inputReview, setInputReview] = useState({ comment: '', rating: '' });
  const inputHandler = (e) => {
    setInputReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //   console.log('inputReview', inputReview);

  const submitInputs = () => {
    handleClose();
    dispatch(postReview(inputReview, id));
  };
  // ниже логика reting input в модалке

  // подать заявку
  const navigate = useNavigate();
  const clickHandlerApplic = () => {
    navigate(`/applications/${id}`);
  };
  return (
    <>
      {allMentors.length > 0 ? (
        <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
          <div className="imgBlock">
            <img src={`/photos/${oneMentor[0]?.photo}`} alt="img" className="imgCard" />
            {/* <p className="reiting">9 / 10</p> */}
          </div>
          <div className="textCard">
            <div className="subtitleCard">{`${oneMentor[0]?.firstName} ${oneMentor[0]?.lastName}`}</div>
            <div className="jobName">
              {oneMentor[0]?.profArea}
            </div>
            <div className="mentorDescr">
              {oneMentor[0]?.aboutMe}
            </div>
            <div className="scill">
              {oneMentor[0].profScill.length > 0 ? (oneMentor[0]?.profScill.split(',').map((el) => (
                <div className="scillBlock" key={el}>
                  <div className="skillItem">{el}</div>
                </div>
              ))) : (
                <div className="scillBlock">
                  <div className="skillItem">Навыки не указаны</div>
                </div>
              ) }
            </div>
          </div>
          <div className="priceBlock">
            <button className="button-36" type="button" onClick={() => clickHandlerApplic(oneMentor.id)}>Подать заявку</button>
            <div className="price">
              {oneMentor[0].price}
              {' '}
              руб. / час
            </div>
          </div>
        </div>
      ) : (<div>Loading</div>)}

      <hr />
      <div className="blockAllReview">

        {/* модалка на отправку отзыва */}
        <div>
          <Dialog open={open} onClose={handleClose}>
            {/* <DialogTitle>Subscribe</DialogTitle> */}
            <DialogContent style={{ width: '500px', height: '180px' }}>
              <TextField
                type="text"
                value={inputReview?.comment}
                style={{ width: '99%' }}
                onChange={(e) => inputHandler(e)}
                id="outlined-multiline-static"
                label="Напишите отзыв . . ."
                // multiline
                rows={4}
                name="comment"
              />
              <div className="inputBtnBlock">
                <TextField
                  style={{ width: '20%', marginTop: '20px' }}
                  name="rating"
                  type="text"
                  id="outlined-multiline-static"
                  label="Рейтинг"
                  value={inputReview?.reting}
                  onChange={(e) => inputHandler(e)}
                />
                <DialogActions>
                  <Button onClick={() => submitInputs()} color="primary">
                    Отправить
                  </Button>

                </DialogActions>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* модалка на отправку отзыва */}
        <div className="push" />
        <div className="subReview">
          <div className="titleReview">
            Отзывы
          </div>
          <div className="btnReview">
            <Button onClick={handleOpen} type="submit" style={{ textTransform: 'none' }} size="small">
              <img src="/icons/plus.png" alt="img" className="imgInfo" />
              Добавить отзыв
            </Button>
          </div>
        </div>

        {currReviews && currReviews?.map((el) => <OneApplicationMentor key={el.id} review={el} />)}
        <div className="btnDiv">
          {numberReviews > currReviews.length ? (null) : (<button onClick={() => setNumberReviews(numberReviews + 3)} className="button-34 stylelefty" type="submit">Еще отзывы</button>)}
        </div>
      </div>
    </>
  );
}
