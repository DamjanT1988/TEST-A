import { Layout } from '../Layout/Layout';
import { Auth } from './Auth/Auth';
import style from './Header.module.css';
import { Heading } from './Heading/Heading';
import { Logo } from './Logo/Logo';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
      <Logo />
      <Heading text='Furnistore' />
      <Auth />
      </div>
    </Layout>
  </header>  
);
