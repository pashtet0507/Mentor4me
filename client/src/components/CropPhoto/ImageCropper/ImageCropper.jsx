import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { useNavigate } from 'react-router-dom';
import './ImageCropper.css';

function ImageCropper({ image, onCropDone, onCropCancel }) {
  const navigate = useNavigate();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  return (
    <div
      className="cropper"
      style={{
        display: 'flex', marginLeft: '13em', marginTop: '-14em', position: 'relative', width: '1000px', height: '1000px',
      }}
    >
      <Cropper
        cropShape="round"
        image={image}
        aspect={aspectRatio}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        style={{
          containerStyle: {
            width: '30%',
            height: '40%',
            backgroundColor: '#fff',
            margin: 'auto',

          },
        }}
      />

      <div className="action-btns" style={{ zIndex: 1000 }}>
        <div className="aspect-ratios" onChange={onAspectRatioChange}>

          {/* <input type="radio" value={1 / 1} name="ratio" />
          {' '}
          1:1
          <input type="radio" value={5 / 4} name="ratio" />
          {' '}
          5:4s
          <input type="radio" value={4 / 3} name="ratio" />
          {' '}
          4:3
          <input type="radio" value={3 / 2} name="ratio" />
          {' '}
          3:2
          <input type="radio" value={5 / 3} name="ratio" />
          {' '}
          5:3
          <input type="radio" value={16 / 9} name="ratio" />
          {' '}
          16:9
          <input type="radio" value={3 / 1} name="ratio" />
          {' '}
          3:1 */}

        </div>
        <div className="oneClassButtonsCroppPhoto">
          {/*  */}

          <button type="button" className="btn2 " onClick={onCropCancel}>
            Отменить
          </button>

          <button
            type="button"
            className="btn1"
            onClick={async () => {
              onCropDone(croppedArea);
              navigate('/gracies');
            }}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCropper;
