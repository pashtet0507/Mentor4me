import React from 'react';
import { Link } from 'react-router-dom';
import './pageerror.css';

export default function PageError() {
  return (
    <div className="textError">
      <img src="/images/pageerror.png" alt="Page Not Found" />
      <Link className="linkBack" to="/">На главную</Link>
    </div>
  );
}
