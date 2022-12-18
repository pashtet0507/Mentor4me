import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../../redux/userSlice';
import './SignUpMentor.css';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hiddenPhone, setHiddenPhone] = useState(true);
  const [hiddenPrice, setHiddenPrice] = useState(true);
  const [auth, setAuth] = useState(true);
  const [inputMentor, setInputMentor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zoom: '',
    phone: '+7',
    video: '',
    call: '',
    chat: '',
    price: '',
    password: '',
    education: '',
    job: '',
    profArea: '',
    profScill: '',
    aboutMe: '',
    portfolio: '',
    isMentor: true,

  });
  const inputHandler = (e) => {
    setInputMentor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitInputs = (e) => {
    e.preventDefault();
    dispatch(getUser(inputMentor));
  };
  return (
    <section className="boxcontainer">
      <header>Регистрация (ментор)</header>

      <form
        className="form"
        onSubmit={(e) => {
          submitInputs(e);
          navigate('/input');
        }}
      >
        {auth
          ? (
            <div>
              <div className="input-box">
                <label>Имя</label>
                <input name="firstName" className="inputAuth" type="text" value={inputMentor.firstName} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>Фамилия</label>
                <input name="lastName" className="inputAuth" type="text" value={inputMentor.lastName} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>Введите email</label>
                <input name="email" className="inputAuth" type="email" value={inputMentor.email} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="column">

                <div className="input-box">
                  <label>Zoom</label>
                  <input name="zoom" className="inputAuthTwo" type="text" value={inputMentor.zoom} onChange={(e) => inputHandler(e)} />
                </div>

                <div className="input-box">
                  <label>Телефон</label>
                  <input
                    name="phone"
                    className="inputAuthTwo"
                    type="tel"
                    value={inputMentor.phone}
                    onChange={(e) => {
                      inputHandler(e);
                      if (inputMentor.phone.length > 11) {
                        setHiddenPhone(false);
                      } else {
                        setHiddenPhone(true);
                      }
                    }}
                  />
                  <span hidden={hiddenPhone} className="hiddenText">
                    Номер телефона должен быть в формате
                    (***) *** - ** - **
                  </span>
                </div>
              </div>
              <p className="textOnInput">Формат консультации</p>
              <div className="flex">
                <label className="inputAuthCheckbox" htmlFor="htmlvideo">
                  <input name="video" value={inputMentor.video} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="html" type="checkbox" />
                  Видео
                </label>
                <label className="inputAuthCheckbox" htmlFor="htmlcall">
                  <input name="call" value={inputMentor.call} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="htmlcall" type="checkbox" />
                  Звонок
                </label>
                <label className="inputAuthCheckbox" htmlFor="htmlchat">
                  <input name="chat" value={inputMentor.chat} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="htmlchat" type="checkbox" />
                  Чат
                </label>
              </div>
              <div className="input-box">
                <label>Цена за консультацию</label>
                <input
                  name="price"
                  className="inputAuth"
                  type="number"
                  placeholder="Цена указывается за час консультации"
                  value={inputMentor.price}
                  onChange={(e) => {
                    inputHandler(e);
                    if (Number(e.target.value) > 5000) {
                      setHiddenPrice(false);
                    } else {
                      setHiddenPrice(true);
                    }
                  }}
                />
                <span hidden={hiddenPrice} className="hiddenText1">
                  Цена не может быть выше 5 000 рублей в час.
                </span>
              </div>

              <div className="input-box">
                <label>Пароль</label>
                <input name="password" id="p1" className="inputAuth" type="password" value={inputMentor.password} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>Повторный ввод пароля</label>
                <input name="repeatPassword" id="p2" className="inputAuth" type="password" onChange={(e) => inputHandler(e)} />
              </div>

              <button style={{ marginLeft: '29%' }} className="btnNext" type="submit" onClick={() => setAuth(false)}><span className="textInBtn">Далее</span></button>
            </div>
          ) : (
            <>
              <div className="input-box">
                <label>Образование</label>
                <input name="education" className="inputAuth" type="text" value={inputMentor.education} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>Место работы</label>
                <input name="job" className="inputAuth" type="text" value={inputMentor.job} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>Профессиональная область</label>
                <input name="profArea" className="inputAuth" type="text" value={inputMentor.profArea} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>Профессиональные навыки</label>
                <input name="profScill" className="inputAuth" type="text" value={inputMentor.profScill} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>О себе</label>
                <textarea name="aboutMe" className="inputAuth" type="text" value={inputMentor.aboutMe} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="input-box">
                <label>Портфолио</label>
                <input name="portfolio" id="p1" className="inputAuth" type="text" placeholder="Введите ссылку" value={inputMentor.portfolio} onChange={(e) => inputHandler(e)} />
              </div>

              <div className="nextButtons">
                <button type="button" onClick={() => setAuth(true)}><span className="textInBtn">Назад</span></button>
                <button type="submit">Отправить</button>
              </div>
            </>
          )}
      </form>

    </section>

  );
}
