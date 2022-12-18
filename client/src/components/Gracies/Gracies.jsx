import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Gracies() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '150px', marginBottom: '150px',
    }}
    >
      <span style={{ fontSize: '34px', fontWeight: 'bold' }}>Успешно!</span>
      <img
        style={{
          maxWidth: '150px', maxHeight: '150px', marginTop: '70px', marginBottom: '70px',
        }}
        src="/icons/succes.png"
        alt="succes"
      />
      <Link to="/">Через 5 секунд вас перенаправит на главную страницу. Если этого не произошло, нажмите на эту ссылку.</Link>
    </div>
  );
}
