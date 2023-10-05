import { useState } from 'react';
import c from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav(props){
    const [isVisibleBurger, setIsVisibleBurger] = useState(true);
    return(
        <nav className={`${c.main__nav} ${c.nav}`}>
            <div className={`${c.nav__logo} ${c.logo}`}>
              <img className={c.logo__image} src="img/logo.png" alt="logo" />
            </div>
            <div onClick={()=>setIsVisibleBurger(!isVisibleBurger)} className={`${c.nav__burger} ${c.burger}`}>
              <span className={c.burger__line}></span>
              <span className={c.burger__line}></span>
              <span className={c.burger__line}></span>
            </div>
            {isVisibleBurger ? (<div className={`${c.nav__menu} ${c.menu}`}>
              <ul className={c.menu__list}>
                <li className={c.menu__item}>
                  <NavLink to="/" className={c.menu__link}>Главное</NavLink>
                </li>
                <li className={c.menu__item}>
                  <NavLink to="/myplaylist" className={c.menu__link}>Мой плейлист</NavLink>
                </li>
                <li className={c.menu__item}>
                  <NavLink onClick={()=>{
                    props.setUser({
                      mail:'', 
                      password:'', 
                      password__double:''})
                    props.setIsToPass(false)}} to='/signin' className={c.menu__link}>Войти</NavLink>
                </li>
              </ul>
            </div>): ''}
          </nav>
    );
}
export default Nav;