import style from './Product.module.css';
import tmpImage from './img/bright_pink_chair.jpg';

const lookInAR = () => {
  console.log('Look');
};

const addToFavorites = () => {
  console.log('Add');
};

export const Product = item => {
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
            onClick={lookInAR}
            className={style.btn}>Look in AR</button>

          <button
            onClick={addToFavorites}
            className={style.btn}>Add to favourites</button>
        </div>

        <div className={style.bottom}>
          <div className={style.purchase}>19 people added to favourites</div>
        </div>
      </div>
    </section>
  );
};
