import React, { useRef } from 'react';
import './FileInput.css';

function FileInput({ onImageSelected }) {
  // useRef - хранение ссылки на html-элементы внутри компонента
  const inputRef = useRef();

  // Навешиваем событие на кнопку загрузки файлов
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <h3 className="addPhotoOneClass">Добавьте фотографию </h3>
      <input
        type="file"
        accept="image/*"
        name="filename"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: 'none' }}
      />
      <button type="button" className="btn" onClick={onChooseImg}>
        <img src="/images/camera.png" alt="oop" />
      </button>
      <p className="textPhotoOneClass">Загрузите свою фотографию (поддерживаемые форматы JPEG, PNG, JPG, GIF)</p>
    </div>
  );
}

export default FileInput;
