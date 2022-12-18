import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerList">
        <div className="footerListLeft">
          <Link className="footerListOneItemLeft" to="/mentor">Менторы</Link>
          <Link className="footerListOneItemLeft" to="/about">О проекте</Link>
        </div>
        <div className="footerListRight">
          <img src="https://cdn-icons-png.flaticon.com/512/889/889111.png" className="footerListOneItemRight" alt="github" />
          <img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" className="footerListOneItemRight" alt="instagram" />
          <img src="https://cdn-icons-png.flaticon.com/512/1312/1312142.png" className="footerListOneItemRight" alt="twitter" />
        </div>
      </div>
      <span className="copyraiting">© 2020 Mentor4me</span>
    </div>
  );
}
