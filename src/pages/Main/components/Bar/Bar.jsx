import { Fragment, useEffect, useRef} from "react";
import c from "./Bar.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
function Bar(props){
  
  const audioRef = useRef(null);
  useEffect(()=>{
    props.setCurrentDuration(audioRef.current.duration);
  })
  const rewind = (e)=>{
    props.setCurrentTime(e.target.value);
    audioRef.current.currentTime = e.target.value;
  }
  const toggleMute=()=>{
    props.setIsMuted(!props.isMuted);
  }
  const volumeChange = (e)=>{
    props.isMuted?props.setIsMuted(false):'';
    audioRef.current.volume = (Number(e.target.value))/100;
  }
  const toggleShuffle=()=>{
    props.setIsShuffle(!props.isShuffle);
  }
  const toggleLoop=()=>{
    props.setIsLoop(!props.isLoop);
    props.isLoop ? audioRef.current.removeAttribute('loop'): audioRef.current.setAttribute('loop',true);
  }

  const handleStart = () => {
    audioRef.current.play();
    props.setIsPlaying(true);
  };
  const runUp=()=>{
    props.setCurrentTime(audioRef.current.currentTime);
  }
  const handleStop = () => {
    audioRef.current.pause();
    props.setIsPlaying(false);
  };
  const togglePlay = props.isPlaying ? handleStop : handleStart;
  const mock =()=>{
    alert('Функционал ещё не готов');
  }
    return (
      <Fragment>
        <audio autoPlay={props.isPlaying} src={props.currentSong.track_file} onTimeUpdate={runUp} muted={props.isMuted?true:false} className={c.true__player} ref={audioRef} >
        </audio>
        <div className={c.bar}>
          <div className={c.timer}>{Math.floor(props.currentTime/60)}:{Math.floor(props.currentTime)%60>9?Math.floor(props.currentTime%60):'0'+Math.floor(props.currentTime%60)}/{Math.floor(props.currentDuration/60)}:{props.currentDuration%60>9?Math.floor(props.currentDuration%60):'0'+Math.floor(props.currentDuration%60)}</div>
          <div className={c.bar__content}>
            <ProgressBar rewind={rewind} duration={props.currentDuration} currentTime={props.currentTime} player={audioRef}></ProgressBar>
            <div className={c.bar__player_block}>
              <div className={`${c.bar__player} ${c.player}`}>
                <div className={c.player__controls}>
                  <div onClick={mock} className={c.player__btn_prev}>
                    <svg className={c.player__btn_prev_svg} alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div onClick={togglePlay} className={`${c.player__btn_play} ${c._btn}`}>
                  {props.isPlaying?
                    <svg className={c.player__btn_play_svg} width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="5" height="19" fill="#D9D9D9"/>
                      <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                    </svg>:
                    <svg className={c.player__btn_play_svg} alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </svg>}
                  </div>
                  <div onClick={mock} className={`${c.player__btn_next} ${c._btn_icon} `}>
                    <svg className={`${c.player__btn_next_svg} `} alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div onClick={toggleLoop} className={`${c.player__btn_repeat}`}>
                    <svg className={`${c.player__btn_repeat_svg} ${c._btn_icon} ${props.isLoop? c.active:''}`} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div  onClick={mock} className={`${c.player__btn_shuffle} ${c._btn_icon}`}>
                    <svg className={`${c.player__btn_shuffle_svg} ${props.isShuffle? c.active:''}`} alt="shuffle">
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
                      <a className={c.track_play__author_link} href="http://">{props.currentSong.name}</a>
                    </div>
                    <div className={c.track_play__album}>
                      <a className={c.track_play__album_link} href="http://">{props.currentSong.author}</a>
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
                  <div onClick={toggleMute} className={c.volume__image}>
                    <svg className={c.volume__svg} alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className={`${c.volume__progress} ${c._btn}`}>
                    <input
                      className={`${c.volume__progress_line} ${c._btn}`}
                      type="range"
                      name="range"
                      max='100'
                      onChange={volumeChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
export default Bar;