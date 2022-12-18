import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';

export default function About() {
  const navigate = useNavigate();
  // const clickHandlerStudent = () => {
  //   navigate('/signup/student');
  // };
  const clickHandlerMentor = () => {
    navigate('/signup/mentor');
  };
  return (
    <div className="aboutBlock">
      <div className="leftBlock">
        <h2>О проекте</h2>
        <div className="aboutText">
          <span>
            Mentor4Me — платформа, позволяющая связать профессионалов, которые хотят делиться экспертизой, и любознательных людей, желающих прокачать свои практические навыки и способности.
          </span>
          <br />
          <br />
          <span>
            Любой человек может зарегистрироваться на нашей платформе:
            {' '}
            <br />
            <span> - в роли ментора — человека, который готов делиться опытом, видением и советом или</span>
            <br />
            <span> - в роли наставляемого — человека, который ищет новые пути развития, нуждается в профессиональном сопровождении или поддержке.</span>
          </span>
        </div>
        <div className="buttons">
          <button className="buttonLeft" type="button"><span className="textButton" onClick={() => navigate('/signup/student')}>Найти ментора</span></button>
          <button className="buttonRight" type="button"><span className="textButton" onClick={() => clickHandlerMentor()}>Стать ментором</span></button>
        </div>
      </div>
      <div className="rightBlock">
        <img src="/pictures/aboutPhoto.svg" alt="aboutPhoto" />
      </div>
    </div>
  );
}
