import c from "./Bar.module.css";
function Bar(){
    return (
      <div className={c.bar}>
          <div className={c.bar__content}>
            <div className={c.bar__player_progress}></div>
            <div className={c.bar__player_block}>
              <div className={`${c.bar__player} ${c.player}`}>
                <div className={c.player__controls}>
                  <div className={c.player__btn_prev}>
                    <svg className={c.player__btn_prev_svg} alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div className={`${c.player__btn_play} ${c._btn}`}>
                    <svg className={c.player__btn_play_svg} alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className={c.player__btn_next}>
                    <svg className={c.player__btn_next_svg} alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div className={`${c.player__btn_repeat} ${c._btn_icon}`}>
                    <svg className={c.player__btn_repeat_svg} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div className={`${c.player__btn_shuffle} ${c._btn_icon}`}>
                    <svg className={c.player__btn_shuffle_svg} alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>
                <div className={`${c.player__track_play} ${c.track_play}`}>
                  <div className={c.track_play__contain}>
                    <div className={c.track_play__image}>
                      <svg className={c.track_play__svg} alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className={c.track_play__author}>
                      <a className={c.track_play__author_link} href="http://">Ты та...</a>
                    </div>
                    <div className={c.track_play__album}>
                      <a className={c.track_play__album_link} href="http://">Баста</a>
                    </div>
                  </div>

                  <div className={c.track_play__like_dis}>
                    <div className={`${c.track_play__like} ${c._btn_icon}`}>
                      <svg className={c.track_play__like_svg} alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div className={`${c.track_play__dislike} ${c._btn_icon}`}>
                      <svg className={c.track_play__dislike_svg} alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${c.bar__volume_block} ${c.volume}`}>
                <div className={c.volume__content}>
                  <div className={c.volume__image}>
                    <svg className={c.volume__svg} alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className={`${c.volume__progress} ${c._btn}`}>
                    <input
                      className={`${c.volume__progress_line} ${c._btn}`}
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default Bar;