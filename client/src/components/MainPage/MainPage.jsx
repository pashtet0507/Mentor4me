import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import './MainPage.css';
import MentorPage from './MentorPage';

export default function MainPage() {
  const navigate = useNavigate();
  // const clickHandlerStudent1 = () => {
  //   navigate('/signup/student');
  // };
  const clickHandlerMentor1 = () => {
    navigate('/signup/mentor');
  };
  return (
    <section className="mainPage">

      <div className="headerWrapper">
        <div className="mentorLeft">
          <div className="titleOne">
            Платформа для поиска
            <br />
            персонального ментора
          </div>
          <div className="contentText">
            Найди ментора для индивидуальных консультаций
            <br />
            в соответствии со своими целями и интересами.
          </div>
          <div className="contentButton">
            <Link to="/signup/student">
              <button className="buttonLeft" type="button">
                <span className="textButton">
                  Найти ментора
                </span>
              </button>
            </Link>

            {/*
              <button className="buttonLeft" type="button">
                <span className="textButton">
                  Найти ментора
                </span>
              </button>
            */}
            <button onClick={() => clickHandlerMentor1()} className="buttonRight" type="button"><span className="textButton">Стать ментором</span></button>
          </div>
        </div>
        <div className="mentorPhoto">
          <img className="imgMentor" src="/images/img7.png" alt="1" />
        </div>
      </div>

      <div className="middleWrapper">
        <div className="titleOne_center">
          Как это работает?
        </div>

        <div className="numberContainer">
          <div className="numberBlock">
            <div className="number">1</div>
            <div className="titleNumber">
              Выберите ментора
            </div>
            <div className="numberText">
              по интерeсующему Вас направлению
            </div>
          </div>

          <div className="numberBlock">
            <div className="number">2</div>
            <div className="titleNumber">
              Напишите ментору
            </div>
            <div className="numberText">
              в чём Вам нужна его
              <br />
              помощь или консультация
            </div>
          </div>

          <div className="numberBlock">
            <div className="number">3</div>
            <div className="titleNumber">
              Договоритесь о целях
            </div>
            <div className="numberText">
              и формате сотрудничества на первой встрече с ментором
            </div>
          </div>

          <div className="numberBlock">
            <div className="number">4</div>
            <div className="titleNumber">
              Составьте план
            </div>
            <div className="numberText">
              и достигайте поставленных целей
            </div>
          </div>
        </div>
        {/* <div className="btnNumber">
          <button onClick="" className="buttonStart" type="submit"><span className="textButton">Начать</span></button>
        </div> */}

      </div>

      <MentorPage />

    </section>
  );
}
