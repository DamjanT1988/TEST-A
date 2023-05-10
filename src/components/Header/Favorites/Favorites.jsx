import style from './Favorites.module.css';
import {ReactComponent as HeartIcon} from './img/heart.svg';

export const Favorites = () => {
  return (
    <a href='/' className={style.heart}>
      <HeartIcon />
      <span className={style.count}>5</span>
    </a>
  );
};
