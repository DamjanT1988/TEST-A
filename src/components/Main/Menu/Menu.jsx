import { useState } from 'react';
import style from './Menu.module.css';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';

export const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [page, setPage] = useState() 
  return <div className={style.container}></div>
};
