/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import FileInput from './FuleInput/FileInput';
import ImageCropper from './ImageCropper/ImageCropper';

function Crop() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [image, setImage] = useState('');
  const [currentPage, setCurrentPage] = useState('choose-img');
  const [imgAfterCrop, setImgAfterCrop] = useState('');

  // Вызывается при выборе нового файла изображения
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage('crop-img');
  };

  // Создание обрезанного изображения при нажатии кнопки «Готово»(Done)
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement('canvas');
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext('2d');

    const imageObj1 = new Image();
    imageObj1.src = image;

    imageObj1.onload = () => {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height,
      );
      const dataURL = canvasEle.toDataURL('image/jpeg');
      console.log(dataURL);
      canvasEle.toBlob((newImg) => {
        const formFile = new FormData();
        formFile.append('crop', newImg, user.id);
        if (user.mentor === true) {
          fetch('http://localhost:3001/cropped/mentor', {
            method: 'POST',
            'Content-Type': 'mulpipart/form-data',
            body: formFile,
          })
            .then((res) => res.json())
            .then((data) => dispatch(setUser((data))))
            .catch(console.log);
        } else {
          fetch('http://localhost:3001/cropped/student', {
            method: 'POST',
            'Content-Type': 'mulpipart/form-data',
            body: formFile,
          })
            .then((res) => res.json())
            .then((data) => dispatch(setUser((data))))
            .catch(console.log);
        }

        // на фронте отображаем <img src={'http://localhost:3001/'+imageName}
      });

      setImgAfterCrop(dataURL);
      setCurrentPage('img-cropped');
    };
  };

  // Отмена загрузки фото
  const onCropCancel = () => {
    setCurrentPage('choose-img');
    setImage('');
  };

  return (

    <div className="container">
      {currentPage === 'choose-img' ? (
        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
      ) : currentPage === 'crop-img' ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div>
          <div>
            <img src={imgAfterCrop} className="cropped-img" alt="fail" />
          </div>

          {/* пока убираем */}
          {/* <button
            type="button"
            onClick={() => {
              setCurrentPage('crop-img');
            }}
            className="btn"
          >
            Crop
          </button> */}

          <button
            type="button"
            onClick={() => {
              setCurrentPage('choose-img');
              setImage('');
            }}
            className="btn"
          >
            New Image
          </button>
        </div>
      )}
    </div>
  );
}

export default Crop;
