import style from './Main.module.css';
import Layout from '../Layout';
import { Menu } from './Menu/Menu';
import { Product } from '../Product/Product';
import { Sidebar } from './Sidebar/Sidebar';
// import CameraStream from '../CameraStream/CameraStream';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Menu />
      {/* <CameraStream /> */}
      <div className={style.commonBlock}>
        <Sidebar />
        <Product />
      </div>
    </Layout>
  </main>
);