import { Layout } from '../Layout/Layout';
import style from './Header.module.css';
import { Logo } from './Logo/Logo';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
      <Logo />
      
      </div>
    </Layout>
  </header>  
);
