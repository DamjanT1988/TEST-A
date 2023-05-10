import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';

export const Search = () => (
  <form className={style.form}>
    <button className={style.button}>
      <SearchIcon /> 
    </button>
    <div className={style.input}>
      <input
        className={style.search}
        type='search'
        name='search'
        placeholder='Search'
        autoComplete='off'
      />
    </div>
  </form>
);
