import style from './Auth.module.css';
import userIcon from './img/user-icon.png';

export const Auth = () => {
  return (
    <div className={style.container}>
      <a className={style.user} href='/'>
        <img className={style.img} src={userIcon} alt="User icon" />
        <p className={style.userName}>Guest</p>
      </a>
    </div>
  );
};
