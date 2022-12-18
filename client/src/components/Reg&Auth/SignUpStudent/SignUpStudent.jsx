import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../redux/userSlice';
import './SignUpStudent.css';

export default function SignUpTwo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputStudent, setInputStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zoom: '',
    phone: '',
    password: '',
    isMentor: false,
  });

  const inputHandler = (e) => {
    setInputStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitInputs = (e) => {
    e.preventDefault();
    dispatch(getUser(inputStudent));
    navigate('/');
  };

  return (
    <section className="boxcontainer">
      <header>Регистрация (студент)</header>

      <form
        onSubmit={(e) => {
          submitInputs(e);
          navigate('/input');
        }}
        className="form"
        action=""
        method="post"
      >

        <div className="input-box">
          <label>Имя</label>
          <input name="firstName" className="inputAuth" type="text" value={inputStudent.firstName} onChange={(e) => inputHandler(e)} />
        </div>

        <div className="input-box">
          <label>Фамилия</label>
          <input name="lastName" className="inputAuth" type="text" value={inputStudent.lastName} onChange={(e) => inputHandler(e)} />
        </div>

        <div className="input-box">
          <label>Введите email</label>
          <input name="email" className="inputAuth" type="email" value={inputStudent.email} onChange={(e) => inputHandler(e)} />
        </div>

        <div className="input-box">
          <label>Zoom</label>
          <input name="zoom" className="inputAuth" type="text" value={inputStudent.zoom} onChange={(e) => inputHandler(e)} />
        </div>

        <div className="input-box">
          <label>Телефон</label>
          <input name="phone" className="inputAuth" type="tel" value={inputStudent.phone} onChange={(e) => inputHandler(e)} />
        </div>

        <div className="input-box">
          <label>Пароль</label>
          <input name="password" id="p1" className="inputAuth" type="password" value={inputStudent.password} onChange={(e) => inputHandler(e)} />
        </div>

        <div className="input-box">
          <label>Повторный ввод пароля</label>
          <input name="repeatPassword" id="p2" className="inputAuth" type="password" onChange={(e) => inputHandler(e)} />
        </div>
        <button style={{ marginLeft: '29%' }} type="submit">Зарегистрироваться</button>
      </form>
    </section>

  );
}
