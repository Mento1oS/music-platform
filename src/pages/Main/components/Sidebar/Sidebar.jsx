import { NavLink } from 'react-router-dom';
import c from './Sidebar.module.css';


function Sidebar(props){
    return(
        <div className={`${c.main__sidebar} ${c.sidebar}`}>
            <div className={c.sidebar__personal}>
              <p className={c.sidebar__personal_name}>{props.user.mail}</p>
              <div className={c.sidebar__icon}>
                <NavLink onClick={()=>{
                  props.setUser({
                    mail: '',
                    password: '',
                    password__double: ''});
                  props.setIsToPass(false);}} to='./signin'>
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
                </NavLink>
              </div>
            </div>
            <div className={c.sidebar__block}>
              <div className={c.sidebar__list}>
                <div className={c.sidebar__item}>
                  <NavLink className={c.sidebar__link} to='compilation/1'>
                    {props.isSkeleton?<div className={c.skeleton}></div>:<img
                      className={c.sidebar__img}
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />}
                  </NavLink>
                </div>
                <div className={c.sidebar__item}>
                  <NavLink className={c.sidebar__link} to='/compilation/2'>
                    {props.isSkeleton?<div className={c.skeleton}></div>:<img
                      className={c.sidebar__img}
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />}
                  </NavLink>
                </div>
                <div className={c.sidebar__item}>
                  <NavLink className={c.sidebar__link} to='compilation/3'>
                    {props.isSkeleton?<div className={c.skeleton}></div>:<img
                      className={c.sidebar__img}
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
    );
}
export default Sidebar;