import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editMentor } from '../../../redux/userSlice';
import { editStudent } from '../../../redux/userInfoSlice';
import './Cabinet.css';

export default function Profile() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user, 'meeeentor');
  const [isTrue, setIsTrue] = useState(true); // для кнопки редактирования
  const [inputUser, setInputUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    zoom: user.zoom,
    phone: user.phone,
    video: user.video,
    call: user.call,
    chat: user.chat,
    price: user.price,
    education: user.education,
    job: user.job,
    profArea: user.profArea,
    profScill: user.profScill,
    aboutMe: user.aboutMe,
    portfolio: user.portfolio,
  });

  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = () => {
    setIsTrue((prev) => !prev);
    if (!user?.isMentor === true) {
      dispatch(editMentor(inputUser));
    } else {
      dispatch(editStudent(inputUser));
    }
  };

  return (
    <div className="parentBlock">
      {!user?.isMentor === true ? (
        <div>
          {isTrue === true ? (
            <section className="boxcontainer1" data-wow-duration="1.2s" data-wow-delay="0.8s">
              <div className="cardBlock">

                <div className="imgBlockCab">
                  <div className="nameCab">{`${user?.firstName} ${user?.lastName}`}</div>
                  <div className="cardBtnBlock">
                    <Button onClick={() => setIsTrue((prev) => !prev)} style={{ textTransform: 'none' }} size="small">Редактировать</Button>
                    {!isTrue && <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Сохранить изменения</Button> }
                  </div>
                  <img src={`/photos/${user?.photo}`} alt="img" className="imgCab" />
                </div>

                <div className="middleCard">
                  <div className="education">{user?.job}</div>
                  <div className="aboutMentor">
                    {user?.aboutMe}
                  </div>
                  <div className="scill">
                    <div className="infoBlock">
                      <div className="subInfoItem">
                        <img src="/icons/dollar.png" alt="img" className="imgInfoMail" />
                        <div className="textInfo">{user?.price}</div>
                      </div>
                      <div className="subInfoItem">
                        <img src="/icons/email.png" alt="img" className="imgInfoMail" />
                        <div className="textInfo">{user?.email }</div>
                      </div>
                      <div className="subInfoItem">
                        <img src="/icons/zoom.png" alt="img" className="imgInfo" />
                        <div className="textInfo">{user?.zoom }</div>
                      </div>
                      <div className="subInfoItem">
                        <img src="/icons/phone.png" alt="img" className="imgInfoMail" />
                        <div className="textInfo">{user?.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rightBlock">
                  <div className="rightTitle">Профессиональные навыки</div>
                  <div className="scillBlock">
                    <div className="skillItem">{user?.profArea}</div>
                  </div>

                  {user.profScill && user?.profScill.split(',')?.map((el) => (
                    <div className="scillBlock">
                      <div className="skillItem">{el}</div>
                    </div>
                  ))}

                  <div className="calendarDiv">
                    <Button onClick={() => navigate('/calendar')} size="small" className="calendar">Календарь занятий</Button>
                  </div>
                </div>
              </div>
            </section>

          )
            : (
              <section className="boxcontainer2" data-wow-duration="1.2s" data-wow-delay="0.8s">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setIsTrue((prev) => !prev);
                  dispatch(editMentor(Object.fromEntries(new FormData(e.target))));
                }}
                >
                  <div className="imgBlockChanges">
                    <div className="photoText">
                      <img src={`/photos/${user?.photo}`} alt="img" className="imgCab" />
                      <div className="nameCab1">{`${user?.firstName} ${user?.lastName}`}</div>
                    </div>

                  </div>
                  <div className="input_name">
                    <label className="labelName">Имя</label>
                    <input className="inputAuth" name="firstName" type="text" placeholder={user?.firstName} value={inputUser?.firstName} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName1">Фамилия</label>
                    <input className="inputAuth" name="lastName" type="text" placeholder={user?.lastName} value={inputUser?.lastName} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">Образование</label>
                    <input className="inputAuth" name="education" type="text" placeholder={user?.education} value={inputUser?.education} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">Информация обо мне</label>
                    <textarea className="inputTextArea" name="aboutMe" type="text" placeholder={user?.aboutMe} value={inputUser?.aboutMe} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">email</label>
                    <input className="inputAuth" name="email" type="text" placeholder={user?.email} value={inputUser?.email} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">zoom</label>
                    <input className="inputAuth" name="inputAuth" type="text" placeholder={user?.zoom} value={inputUser?.zoom} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">phone</label>
                    <input className="inputAuth" name="phone" type="text" placeholder={user?.phone} value={inputUser?.phone} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">price</label>
                    <input className="inputAuth" name="price" type="text" placeholder={user?.price} value={inputUser?.price} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">Профессиональная сфера</label>
                    <input className="inputAuth" name="profArea" type="text" placeholder={user?.profArea} value={inputUser?.profArea} onChange={(e) => inputHandler(e)} />
                  </div>
                  <div className="input_name">
                    <label className="labelName">Профессиональные навыки</label>
                    <input className="inputAuth" name="profScill" type="text" placeholder={user?.profScill} value={inputUser?.profScill} onChange={(e) => inputHandler(e)} />
                  </div>

                  <div className="cardBtnChange">
                    <Button
                      onClick={() => setIsTrue((prev) => !prev)}
                      style={{
                        fontWeight: '700',
                        marginTop: '10px',
                        textTransform: 'none',
                        fontSize: '16px',
                      }}
                      size="small"
                    >
                      Отменить
                    </Button>
                    {!isTrue && (
                    <button
                      onClick={() => {
                        setIsTrue((prev) => !prev);
                        dispatch(editMentor(inputUser));
                      }}
                      type="button"
                      className="button-34"
                    >
                      Сохранить
                    </button>
                    ) }
                  </div>
                </form>
              </section>
            )}
        </div>
      )
        : (
          <>

            {isTrue === true ? (
              <section className="boxcontainer1" data-wow-duration="1.2s" data-wow-delay="0.8s">
                <div className="cardBlock">

                  <div className="imgBlockCab">
                    <div className="nameCab">{`${user?.firstName} ${user?.lastName}`}</div>
                    <div className="cardBtnBlock">
                      <Button onClick={() => setIsTrue((prev) => !prev)} style={{ textTransform: 'none' }} size="small">Редактировать</Button>
                      {!isTrue && (
                      <Button
                        onClick={() => {
                          dispatch(editMentor(inputUser));
                          setIsTrue((prev) => !prev);
                        }}
                        size="small"
                      >
                        Сохранить изменения
                      </Button>
                      ) }
                    </div>
                    <img src={`/photos/${user?.photo}`} alt="img" className="imgCab" />
                  </div>

                  <div className="middleCard">
                    <div className="subInfoItem">
                      <img src="/icons/email.png" alt="img" className="imgInfoMail" />
                      <div className="textInfo">{user?.email }</div>
                    </div>
                    <div className="subInfoItem">
                      <img src="/icons/zoom.png" alt="img" className="imgInfo" />
                      <div className="textInfo">{user?.zoom }</div>
                    </div>
                    <div className="subInfoItem">
                      <img src="/icons/phone.png" alt="img" className="imgInfoMail" />
                      <div className="textInfo">{user?.phone}</div>
                    </div>
                  </div>

                </div>
              </section>

            )
              : (
                <section className="boxcontainer2" data-wow-duration="1.2s" data-wow-delay="0.8s">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsTrue((prev) => !prev);
                    dispatch(editStudent(Object.fromEntries(new FormData(e.target))));
                  }}
                  >
                    <div className="input_name">
                      <label className="labelName">Имя</label>
                      <input className="inputAuth" name="firstName" type="text" placeholder={user?.firstName} value={inputUser?.firstName} onChange={(e) => inputHandler(e)} />
                    </div>
                    <div className="input_name">
                      <label className="labelName1">Фамилия</label>
                      <input className="inputAuth" name="lastName" type="text" placeholder={user?.lastName} value={inputUser?.lastName} onChange={(e) => inputHandler(e)} />
                    </div>
                    <div className="cardBtnChange">
                      <Button
                        onClick={() => setIsTrue((prev) => !prev)}
                        style={{
                          fontWeight: '700',
                          marginTop: '10px',
                          textTransform: 'none',
                          fontSize: '16px',
                        }}
                        size="small"
                      >
                        Отменить
                      </Button>
                      {!isTrue && (
                      <button
                        onClick={() => {
                          setIsTrue((prev) => !prev);
                          dispatch(editMentor(inputUser));
                        }}
                        type="button"
                        className="button-34"
                      >
                        Сохранить
                      </button>
                      ) }
                    </div>
                    <div className="input_name">
                      <label className="labelName">email</label>
                      <input className="inputAuth" name="email" type="text" placeholder={user?.email} value={inputUser?.email} onChange={(e) => inputHandler(e)} />
                    </div>
                    <div className="input_name">
                      <label className="labelName">zoom</label>
                      <input className="inputAuth" name="inputAuth" type="text" placeholder={user?.zoom} value={inputUser?.zoom} onChange={(e) => inputHandler(e)} />
                    </div>
                    <div className="input_name">
                      <label className="labelName">phone</label>
                      <input className="inputAuth" name="phone" type="text" placeholder={user?.phone} value={inputUser?.phone} onChange={(e) => inputHandler(e)} />
                    </div>
                  </form>
                </section>
              )}
            <CardActions>
              <Button size="small">Записаться на занятие</Button>
            </CardActions>
          </>
        )}
    </div>
  );
}
