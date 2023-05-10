import { useState, useEffect } from 'react';
import style from './Menu.module.css';
import { assignId } from '../../../utils/generateRandomId';
import { debounceRaf } from '../../../utils/debounce';
// import { useNavigate } from 'react-router';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';

const LIST = [
  {value: "Home", link: ''},
  {value: "About Us", link: 'about'},
  {value: "Catalog", link: 'catalog'},
  {value: "Contacts", link: 'contacts'},
].map(assignId);

export const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [page, setPage] = useState(LIST[0].value);
  // const navigate = useNavigate();

  // resize menu
  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  
  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
          <div className={style.wrapperBtn}>
            <button
              className={style.btn}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {page}
              <ArrowIcon width={15} height={15} />
            </button>
          </div>
      )}

      {(isDropdownOpen || !isDropdown) &&
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, link}) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  setPage(value);
                  // navigate(`/${link}`);
                }}>
                {value}
              </button>
            </li>
          ))}
        </ul>}
    </div>
  );
};
