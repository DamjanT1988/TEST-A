import { Layout } from '../Layout/Layout';
import { Auth } from './Auth/Auth';
import { Favorites } from './Favorites/Favorites';
import style from './Header.module.css';
import { Heading } from './Heading/Heading';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Furnistore' />
        <Auth />
        <Search />
        <Favorites />
      </div>
    </Layout>
  </header>  
);
