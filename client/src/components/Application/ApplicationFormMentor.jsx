import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAplicationStatus } from '../../redux/applicationSlice';
import './ApplicationFormMentor.css';

export default function ApplicationFormMentor({ el }) {
  const [hid, setHid] = useState(true);
  const [hidCom, setHidCom] = useState(true);
  const [comm, setComm] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="blog_post">
      <div className="container_copy">
        <div className="studentsCred" key={el.id}>
          Студент:
          <div><img className="photo" src={`/photos/${el?.Student?.photo}`} alt="opps" /></div>
          <div className="userFirstName"><b>{el?.Student?.firstName}</b></div>
          <div className="userLastName"><b>{el?.Student?.lastName}</b></div>
        </div>
      </div>
      {el?.Statuses[0]?.status === true || el?.Statuses[0]?.status === false ? (
        el?.Statuses[0]?.status === true ? (
          <h4 style={{
            color: 'green', fontSize: '14px', fontWeight: '300', padding: '0 15px',
          }}
          >
            Заявка принята
          </h4>
        ) : (
          <span style={{
            color: 'red', fontSize: '14px', fontWeight: '300', padding: '0 15px',
          }}
          >
            Заявка отклонена
          </span>
        )
      ) : (
        <>
          <button target="_blank" className="btn_primary" onClick={() => setHid((prev) => !prev)} type="button">Подробнее</button>
          <div className="modelStyle" hidden={hid}>
            <h3 className="textHeader">Текст заявки:</h3>
            <br />
            <p className="textBody">{el?.text}</p>
            <br />
            <div>
              <h4 className="status">Cтатус заявки: </h4>
              <br />
              {el?.Statuses[0]?.status === null ? (
                <span style={{
                  color: 'blue', fontSize: '13px', fontWeight: '300', padding: '0 10px',
                }}
                >
                  На рассмотрении
                </span>
              ) : (el.Statuses[0]?.status === true ? (<span style={{ color: 'green' }}>Принята</span>) : (<span style={{ color: 'red' }}>Отклонена</span>))}
              <br />
              <div className="statusBtn">
                <button
                  className="acceptButton"
                  onClick={() => {
                    setHidCom(false);
                    setStatus(true);
                    setHid(true);
                  }}
                  type="button"
                >
                  Принять

                </button>
                <button
                  className="cancelButton"
                  onClick={() => {
                    setStatus(false);
                    setHidCom(false);
                    setHid(true);
                  }}
                  type="button"
                >
                  Отклонить

                </button>
              </div>
            </div>
          </div>
          <div className="setComm" hidden={hidCom}>
            <div>
              <h3 className="textHeader">Напишите комментарий</h3>
              <textarea className="commInput" name="comments" value={comm} onChange={(e) => setComm(e.target.value)} type="text" placeholder="Комментарий" />
              <button
                className="btn_primary"
                onClick={() => {
                  dispatch(setAplicationStatus({ status, comments: comm, application_id: el.id }));
                  setHid(true);
                }}
                type="button"
              >
                Отправить
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
