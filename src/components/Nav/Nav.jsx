import c from './Nav.module.css';

function Nav(){
    return(
        <nav className={`${c.main__nav} ${c.nav}`}>
            <div className={`${c.nav__logo} ${c.logo}`}>
              <img className={c.logo__image} src="img/logo.png" alt="logo" />
            </div>
            <div className={`${c.nav__burger} ${c.burger}`}>
              <span className={c.burger__line}></span>
              <span className={c.burger__line}></span>
              <span className={c.burger__line}></span>
            </div>
            <div className={`${c.nav__menu} ${c.menu}`}>
              <ul className={c.menu__list}>
                <li className={c.menu__item}>
                  <a href="#" className={c.menu__link}>Главное</a>
                </li>
                <li className={c.menu__item}>
                  <a href="#" className={c.menu__link}>Мой плейлист</a>
                </li>
                <li className={c.menu__item}>
                  <a href="../signin.html" className={c.menu__link}>Войти</a>
                </li>
              </ul>
            </div>
          </nav>
    );
}
export default Nav;