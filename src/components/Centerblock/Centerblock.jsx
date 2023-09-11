import c from './Centrerblock.module.css';

function Centerblock(){
    return(
        <div className={`${c.main__centerblock} ${c.centerblock}`}>
            <div className={`${c.centerblock__search} ${c.search}`}>
              <svg className={c.search__svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className={c.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className={c.centerblock__h2}>Треки</h2>
            <div className={`${c.centerblock__filter} ${c.filter}`}>
              <div className={c.filter__title}>Искать по:</div>
              <div className={`${c.filter__button} ${c.button_author} ${c._btn_text}`}>
                исполнителю
              </div>
              <div className={`${c.filter__button} ${c.button_year} ${c._btn_text}`}>
                году выпуска
              </div>
              <div className={`${c.filter__button} ${c.button_genre} ${c._btn_text}`}>жанру</div>
            </div>
            <div className={c.centerblock__content}>
              <div className={`${c.content__title} ${c.playlist_title}`}>
                <div className={`${c.playlist_title__col} ${c.col01}`}>Трек</div>
                <div className={`${c.playlist_title__col} ${c.col02}`}>ИСПОЛНИТЕЛЬ</div>
                <div className={`${c.playlist_title__col} ${c.col03}`}>АЛЬБОМ</div>
                <div className={`${c.playlist_title__col} ${c.col04}`}>
                  <svg className={c.playlist_title__svg} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className={`${c.content__playlist} ${c.playlist}`}>
                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Guilt <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Nero</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Welcome Reality</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>4:44</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Elektro <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Dynoro, Outwork, Mr. Gee</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Elektro</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>2:22</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">I’m Fire <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Ali Bakgor</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">I’m Fire</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>2:22</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Non Stop<span className={c.track__title_span}>(Remix)</span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Стоункат, Psychopath</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Non Stop</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>4:12</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Run Run
                          <span className={c.track__title_span}>(feat. AR/CO)</span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Jaded, Will Clarke, AR/CO</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Run Run</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>2:54</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Eyes on Fire
                          <span className={c.track__title_span}>(Zeds Dead Remix)</span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Blue Foundation, Zeds Dead</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Eyes on Fire</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>5:20</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Mucho Bien
                          <span className={c.track__title_span}>(Hi Profile Remix)</span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Mucho Bien</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>3:41</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Knives n Cherries
                          <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Knives n Cherries
                          <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Knives n Cherries<span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Knives n Cherries<span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Knives n Cherries
                          <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Knives n Cherries<span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Knives n Cherries
                          <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">How Deep Is Your Love
                          <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Calvin Harris, Disciples</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://" >How Deep Is Your Love</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>3:32</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">Morena <span className={c.track__title_span}></span></a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://">Tom Boxer</a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">Soundz Made in Romania</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>3:36</span>
                    </div>
                  </div>
                </div>

                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={c.track__title}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={c.track__title_text}>
                        <a className={c.track__title_link} href="http://">
                          <span className={c.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={c.track__author}>
                      <a className={c.track__author_link} href="http://"></a>
                    </div>
                    <div className={c.track__album}>
                      <a className={c.track__album_link} href="http://"></a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
export default Centerblock;