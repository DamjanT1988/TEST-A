import style from './Main.module.css';
import Layout from '../Layout';
import { Menu } from './Menu/Menu';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Menu />
    </Layout>
  </main>
);