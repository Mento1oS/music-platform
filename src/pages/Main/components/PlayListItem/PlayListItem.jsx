import c from './PlayListItem.module.css';
export default function PlayList__item(props){
    return(
          <div className={c.playlist__item}>
            <div onClick={()=>{
                  props.setCurrentSong(()=>{
                        return props.song});
                  props.setIsPlaying(true);}} className={`${c.playlist__track} ${c.track}`}>
              <div className={`${c.track__title}`}>
                <div className={c.track__title_image}>
                  <svg className={c.track__title_svg} alt="music">
                    {props.isSkeleton?(<img src='/img/Group12.png'></img>):
                      (<use xlinkHref="img/icon/sprite.svg#icon-note"></use>)}
                  </svg>
                </div>
                  {props.isSkeleton ? <div className={c.column1}></div>
                    :<div className={c.track__title_text}><a className={c.track__title_link} href="http://">{props.song.name} <span className={c.track__title_span}>{props.span? props.span: ''}</span></a></div>}
              </div>
              <div className={`${c.track__author}`}>
                {props.isSkeleton? <div className={c.column2}></div>
                  :<a className={c.track__author_link} href="http://">{props.song.author}</a>}
              </div>
              {props.isSkeleton? <div className={c.column3}></div>
                :<><div className={c.track__album}>
                  <a className={c.track__album_link} href="http://">{props.song.album}</a>
                  </div>
                  <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>{Math.floor(props.song.duration_in_seconds/60)}:{props.song.duration_in_seconds%60>9?props.song.duration_in_seconds%60:'0'+props.song.duration_in_seconds%60}</span>
                  </div>
                </>}
            </div>
          </div>
    );
}