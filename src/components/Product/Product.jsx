import React, { useState } from 'react';
import style from './Product.module.css';
import tmpImage from './img/bright_pink_chair.jpg';
import CameraStream from '../CameraStream/CameraStream';

const lookInAR = (setShowCameraStream) => {
  setShowCameraStream(true);
};

const addToFavorites = () => {
  console.log('Add');
};

export const Product = () => {
  const [showCameraStream, setShowCameraStream] = useState(false);
  return (
    <section  className={style.product}>
      <div className={style.image}>
        <img className={style.currentImage} src={tmpImage} alt="tmp" />
      </div>
      <div className={style.info}>
        <h1 className={style.title}>Pink chair</h1>
        <div className={style.color}>
          <span>Color:</span> Pink
        </div>

        <p className={style.description}>New pink chairNew pink chairNew pink 
          chairNew pink<br /> chairNew pink chairNew pink chairNew pink chair</p>

        <div className={style.actions}>
          <button
            onClick={() => lookInAR(setShowCameraStream)}
            className={style.btn}>Look in AR</button>

          <button
            onClick={addToFavorites}
            className={style.btn}>Add to favourites</button>
        </div>

        <div className={style.bottom}>
          <div className={style.purchase}>19 people added to favourites</div>
        </div>
      </div>
      {showCameraStream && <CameraStream />}
    </section>
  );
};
