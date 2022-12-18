import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoginUser } from '../../../redux/userSlice';
import './LoginAll.css';

export default function LoginAll() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section className="boxcontainer">
      <header>Авторизация</header>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log((Object.fromEntries(new FormData(e.target))));
          dispatch(getLoginUser(Object.fromEntries(new FormData(e.target))));
          navigate('/');
        }}
      >
        <div className="input-box">
          <label>
            Email
            <input type="email" name="email" placeholder="Введите email" required />
          </label>
        </div>
        <div className="input-box">
          <label>
            Пароль
            <input type="password" name="password" placeholder="Введите пароль" required />
          </label>
        </div>
        <div className="status">
          <label htmlFor="isMentor">
            <input name="isMentor" type="checkbox" id="isMentor" />
            Я ментор
          </label>
        </div>
        <button style={{ marginLeft: '29%' }} type="submit">Войти</button>
      </form>
    </section>
  );
}
