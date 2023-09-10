import c from './Sidebar.module.css';

function Sidebar(){
    return(
        <div className={`${c.main__sidebar} ${c.sidebar}`}>
            <div className={c.sidebar__personal}>
              <p className={c.sidebar__personal_name}>Sergey.Ivanov</p>
              <div className={c.sidebar__icon}>
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className={c.sidebar__block}>
              <div className={c.sidebar__list}>
                <div className={c.sidebar__item}>
                  <a className={c.sidebar__link} href="#">
                    <img
                      className={c.sidebar__img}
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className={c.sidebar__item}>
                  <a className={c.sidebar__link} href="#">
                    <img
                      className={c.sidebar__img}
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className={c.sidebar__item}>
                  <a className={c.sidebar__link} href="#">
                    <img
                      className={c.sidebar__img}
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
    );
}
export default Sidebar;