import style from './Main.module.css';
import Layout from '../Layout';
import { Menu } from './Menu/Menu';
import { Product } from '../Product/Product';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Menu />
      <Product />
    </Layout>
  </main>
);