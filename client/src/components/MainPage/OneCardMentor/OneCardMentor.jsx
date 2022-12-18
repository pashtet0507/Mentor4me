import React from 'react';
import './OneCardMentor.css';
import '../../../App.css';
import { useNavigate, Link } from 'react-router-dom';

export default function OneMentorPage({ mentor }) {
  console.log('mentor', mentor);
  const navigate = useNavigate();

  const clickHandlerforinfo = (id) => {
    navigate(`/mentorinfo/${id}`);
  };
  // const showFavourite = () => {

  // };

  return (
    <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
      <div className="imgBlock">
        <img src={`/photos/${mentor?.photo}`} alt="img" className="imgCard" />
        {/* <p className="reiting">9 / 10</p> */}
      </div>
      <div className="textCard" onClick={() => clickHandlerforinfo(mentor.id)}>
        <div className="subtitleCard">{`${mentor?.firstName} ${mentor?.lastName}`}</div>
        <div className="jobName">
          {mentor?.profArea}
        </div>
        <div className="mentorDescr">
          {mentor?.aboutMe}
        </div>
        <div className="scill">
          {mentor.profScill.length > 0 ? (mentor?.profScill.split(',').map((el) => (
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
        <button className="button-36" onClick={() => navigate(`/applications/${mentor?.id}`)} type="button">Подать заявку</button>
        <div className="price">
          {`${mentor?.price} руб. / час`}
        </div>
      </div>
    </div>

  );
}
