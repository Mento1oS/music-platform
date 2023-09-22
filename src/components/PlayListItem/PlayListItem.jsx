import c from './PlayListItem.module.css';
export default function PlayList__item(props){
    return(
                <div className={c.playlist__item}>
                  <div className={`${c.playlist__track} ${c.track}`}>
                    <div className={`${c.track__title}`}>
                      <div className={c.track__title_image}>
                        <svg className={c.track__title_svg} alt="music">
                          {props.isSkeleton?(<img src='/img/Group12.png'></img>):
                          (<use xlinkHref="img/icon/sprite.svg#icon-note"></use>)}
                        </svg>
                      </div>
                      <div className={c.track__title_text}>{props.isSkeleton ? (<img className={c.col01} src="/img/Rectangle11.png"></img>):(<a className={c.track__title_link} href="http://">{props.title} <span className={c.track__title_span}>{props.span? props.span: ''}</span></a>)}
                      </div>
                    </div>
                    <div className={`${c.track__author}`}>
                      {props.isSkeleton?<img className={c.col02} src="/img/Rectangle12.png"></img>:<a className={c.track__author_link} href="http://">{props.author}</a>}
                    </div>
                    {props.isSkeleton?<img src="/img/Rectangle13.png" className={c.col03}></img>:<><div className={c.track__album}>
                      <a className={c.track__album_link} href="http://">{props.album}</a>
                    </div>
                    <div className={c.track__time}>
                      <svg className={c.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={c.track__time_text}>{props.duration}</span>
                    </div></>}
                    
                  </div>
                </div>
    );
}