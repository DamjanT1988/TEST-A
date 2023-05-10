import style from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <section className={style.sidebar}>
      <p className={style.title}>CATEGORIES</p>
      <div>
        <ul className={style.menu}>
          <a href='/'><li>Couches</li></a>
          <a href='/'><li>Beds</li></a>
          <a href='/'><li>Drawers</li></a>
        </ul>
      </div>

      <div className={style.footer}>
        <a
          className={style.link}
          href='/help'
          target='_blank'
        >
          Help
        </a>
      </div>
    </section>
  )
};
