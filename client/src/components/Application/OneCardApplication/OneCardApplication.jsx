import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getApplication } from '../../../redux/applicationSlice';

export default function OneCardApplication() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [application, setApplication] = useState({
    video: '',
    call: '',
    chat: '',
    text: '',
  });
  const inputHandler = (e) => {
    setApplication((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitInputs = () => {
    dispatch(getApplication(application, id));
    window.location.href = '/applications';
  };

  return (
    <section className="boxcontainer">
      <header>Создать заявку</header>
      <form className="form">

        <div className="input-box">
          <label>Выберите формат консультации</label>
        </div>

        <div className="inpucheckbox-container" style={{ marginTop: '9px' }}>
          <label className="inputAuthCheckbox" htmlFor="htmlvideo">
            <input type="checkbox" name="video" value={application.video} onChange={(e) => setApplication((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} />
            Видео
          </label>
          <label className="inputAuthCheckbox" htmlFor="htmlcall">
            <input type="checkbox" name="call" value={application.call} onChange={(e) => setApplication((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} />
            Звонок
          </label>
          <label className="inputAuthCheckbox" htmlFor="htmlchat">
            <input type="checkbox" name="chat" value={application.chat} onChange={(e) => setApplication((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} />
            Чат
          </label>
        </div>

        <div className="input-box">
          <label>Опишите интересующий Вас вопрос</label>
          <input
            type="text"
            name="text"
            value={application.text}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <button type="button" style={{ marginLeft: '29%' }} onClick={() => submitInputs()}>Подать заявку</button>
      </form>
    </section>
  );
}
