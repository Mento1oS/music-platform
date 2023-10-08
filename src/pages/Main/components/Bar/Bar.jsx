import { Fragment, useEffect, useRef} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { StyledBar, StyledBar__Content, StyledBar__Player_Block,
  StyledBar__Player_Player, StyledBar__Volume_Block_Volume, StyledPlayer__Btn_Next_Button__Icon,
  StyledPlayer__Btn_Play, StyledPlayer__Btn_Prev_Button__Icon, StyledPlayer__Btn_Repeat_Button__Icon, 
  StyledPlayer__Btn_Shuffle_Button__Icon, StyledPlayer__Controls, StyledPlayer__Track_Play_Track__Play, 
  StyledTimer, StyledTrack_Play__Album, StyledTrack_Play__Album_Link, 
  StyledTrack_Play__Author, StyledTrack_Play__Author_Link, StyledTrack_Play__Dislike, 
  StyledTrack_Play__Dislike_Svg, StyledTrack_Play__Image, StyledTrack_Play__Like, 
  StyledTrack_Play__Like_Svg, StyledTrack_Play__Svg, StyledTrack_Play__Like_Dis, 
  StyledTrack_Play__Contain, StyledTrue__Player, StyledVolume__Content, 
  StyledVolume__Image, StyledVolume__Progress, StyledVolume__Progress_Line, StyledVolume__Svg, Styled__Btn_Next_Svg,
  Styled__Btn_Play_Svg, Styled__Btn_Prev_Svg, Styled__Btn_Repeat_Svg, Styled__Btn_Shuffle_Svg } from "./styles";
import { useThemeContext } from "../../../../providers/ThemeProvider";
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
    console.log(!props.isLoop+'Это пизда,блять');
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
  const {theme} = useThemeContext();
    return (
      <Fragment>
        <StyledTrue__Player autoPlay={props.isPlaying} src={props.currentSong.track_file} onTimeUpdate={runUp} muted={props.isMuted?true:false} ref={audioRef} >
        </StyledTrue__Player>
        <StyledBar>
          <StyledTimer>{Math.floor(props.currentTime/60)}:{Math.floor(props.currentTime)%60>9?Math.floor(props.currentTime%60):'0'+Math.floor(props.currentTime%60)}/{Math.floor(props.currentDuration/60)}:{props.currentDuration%60>9?Math.floor(props.currentDuration%60):'0'+Math.floor(props.currentDuration%60)}</StyledTimer>
          <StyledBar__Content theme={theme}>
            <ProgressBar rewind={rewind} duration={props.currentDuration} currentTime={props.currentTime} player={audioRef}></ProgressBar>
            <StyledBar__Player_Block>
              <StyledBar__Player_Player>
                <StyledPlayer__Controls>
                  <StyledPlayer__Btn_Prev_Button__Icon onClick={mock}>
                    <Styled__Btn_Prev_Svg alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </Styled__Btn_Prev_Svg>
                  </StyledPlayer__Btn_Prev_Button__Icon>
                  <StyledPlayer__Btn_Play onClick={togglePlay}>
                  {props.isPlaying?
                    <Styled__Btn_Play_Svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="5" height="19" fill="#D9D9D9"/>
                      <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                    </Styled__Btn_Play_Svg>:
                    <Styled__Btn_Play_Svg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </Styled__Btn_Play_Svg>}
                  </StyledPlayer__Btn_Play>
                  <StyledPlayer__Btn_Next_Button__Icon onClick={mock}>
                    <Styled__Btn_Next_Svg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </Styled__Btn_Next_Svg>
                  </StyledPlayer__Btn_Next_Button__Icon>
                  <StyledPlayer__Btn_Repeat_Button__Icon onClick={toggleLoop}>
                    <Styled__Btn_Repeat_Svg isLoop={props.isLoop} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </Styled__Btn_Repeat_Svg>
                  </StyledPlayer__Btn_Repeat_Button__Icon>
                  <StyledPlayer__Btn_Shuffle_Button__Icon onClick={mock}>
                    <Styled__Btn_Shuffle_Svg isShuffle={props.isShuffle} alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </Styled__Btn_Shuffle_Svg>
                  </StyledPlayer__Btn_Shuffle_Button__Icon>
                </StyledPlayer__Controls>
                
                <StyledPlayer__Track_Play_Track__Play>
                  <StyledTrack_Play__Contain>
                    <StyledTrack_Play__Image>
                      <StyledTrack_Play__Svg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </StyledTrack_Play__Svg>
                    </StyledTrack_Play__Image>
                    <StyledTrack_Play__Author>
                      <StyledTrack_Play__Author_Link theme={theme} href="http://">{props.currentSong.name}</StyledTrack_Play__Author_Link>
                    </StyledTrack_Play__Author>
                    <StyledTrack_Play__Album>
                      <StyledTrack_Play__Album_Link theme={theme} href="http://">{props.currentSong.author}</StyledTrack_Play__Album_Link>
                    </StyledTrack_Play__Album>
                  </StyledTrack_Play__Contain>

                  <StyledTrack_Play__Like_Dis>
                    <StyledTrack_Play__Like>
                      <StyledTrack_Play__Like_Svg alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </StyledTrack_Play__Like_Svg>
                    </StyledTrack_Play__Like>
                    <StyledTrack_Play__Dislike>
                      <StyledTrack_Play__Dislike_Svg alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                      </StyledTrack_Play__Dislike_Svg>
                    </StyledTrack_Play__Dislike>
                  </StyledTrack_Play__Like_Dis>
                </StyledPlayer__Track_Play_Track__Play>
              </StyledBar__Player_Player>
              <StyledBar__Volume_Block_Volume>
                <StyledVolume__Content>
                  <StyledVolume__Image onClick={toggleMute}>
                    <StyledVolume__Svg alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </StyledVolume__Svg>
                  </StyledVolume__Image>
                  <StyledVolume__Progress>
                    <StyledVolume__Progress_Line
                      type="range"
                      name="range"
                      max='100'
                      onChange={volumeChange}
                    />
                  </StyledVolume__Progress>
                </StyledVolume__Content>
              </StyledBar__Volume_Block_Volume>
            </StyledBar__Player_Block>
          </StyledBar__Content>
        </StyledBar>
      </Fragment>
    );
}
export default Bar;