import React, { useState } from 'react';
import './ApplicationFormMentor.css';

export default function ApplicationFormbutt({ el }) {
  return (
    <div className="blog_post_student">
      <div className="container_copy_student">
        <div className="mentorInfo" key={el.id}>
          Ментор:
          <div><img className="photo" src={`/photos/${el?.Mentor?.photo}`} alt="opps" /></div>
          <div className="userFirstName">{el?.Mentor.firstName}</div>
          <div className="userLastName">{el?.Mentor?.lastName}</div>
        </div>
        <h3 className="textHeader">Текст заявки</h3>
        <br />
        <p className="textBodyMentor">{el?.text}</p>
        <br />
        <div className="statusMent">
          <h4>Cтатус заявки: </h4>
          <br />
          {el.Statuses[0]?.status === null ? (
            <div style={{
              color: 'blue', fontSize: '13px', fontWeight: '300', marginTop: '-7px',
            }}
            >
              На рассмотрении
            </div>
          ) : (el.Statuses[0]?.status === true ? (<span style={{ color: 'green' }}>Принята</span>) : (<span style={{ color: 'red' }}>Отклонена</span>))}
          <br />
          <h4>Комментарий: </h4>
          {el.Statuses[0]?.comments ? (<span style={{ wordWrap: 'break-word' }}>{el.Statuses[0]?.comments}</span>) : (<div style={{ marginTop: '8px', maxWidth: '100%' }}>Ментор не оставил комментариев</div>)}
        </div>
      </div>
    </div>
  );
}
