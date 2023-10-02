import c from './Centerblock.module.css';
import PlayList__item from '../PlayListItem/PlayListItem';
import Dropout from '../Dropout/Dropout';
import { useState } from 'react';
function Centerblock(props){
    const [dropoutStatus, setDropoutStatus] = useState([false, false, false]);
    const singers=['messi', 'Noize MC', 'RHCP', 'Pyrokinesis', 'Joy Division', 'Lol', 'mocker'];
    const years = ['1987', '2022', '1995', '2015', '1980'];
    const genres = ['rock', 'rap', 'hip-hop', 'post-punk', 'alternative rock', 'punk-rock'];
    const switchHandle=(e)=>{
      const target = e.target;
      const parent = target.parentElement;
      const children = Array.from(parent.children);
      const index= children.indexOf(target)-1;
      switch(index){
        case 0:
          setDropoutStatus([!dropoutStatus[0], false, false]);
          break;
        case 1:
          setDropoutStatus([false, !dropoutStatus[1], false]);
          break;
        case 2:
          setDropoutStatus([false, false, !dropoutStatus[2]]);
          break;
      }
      
    }
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
              <div onClick={switchHandle} className={`${c.filter__button} ${c.button_author} ${c._btn_text} ${dropoutStatus[0]&& c.active}`}>
                исполнителю
                {dropoutStatus[0]&&<div className={`${c.filter__list__wrapper} ${c.author__list}`}><Dropout data={singers}/></div>}
              </div>
              <div onClick={switchHandle} className={`${c.filter__button} ${c.button_year} ${c._btn_text} ${dropoutStatus[1]&& c.active}`}>
                году выпуска {dropoutStatus[1] && <div className={`${c.filter__list__wrapper} ${c.year__list}`}><Dropout data={years}/></div>}
              </div>
              <div onClick={switchHandle} className={`${c.filter__button} ${c.button_genre} ${c._btn_text} ${dropoutStatus[2]&& c.active}`}>
                жанру{dropoutStatus[2] && <div className={`${c.filter__list__wrapper} ${c.genre__list}`}><Dropout data={genres}/></div>}</div>
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
                {props.isSkeleton?
                <><PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/>
                <PlayList__item isSkeleton={props.isSkeleton} title='' author='' album='' duration=''/></>
                :props.tracks.map((elem=><PlayList__item key={elem.id} isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} setCurrentSong={props.setCurrentSong} currentSong={props.currentSong} isSkeleton={props.isSkeleton} song={elem}/>))
                }
              </div>
            </div>
          </div>
    )
}
export default Centerblock;