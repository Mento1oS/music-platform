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
import { useDispatch, useSelector } from "react-redux";import { useGetFavoriteSongsQuery } from "../../../../store/middlewares/favorites";
import { toggleMute, toggleLoop, togglePlay, setCurrentDuration, setCurrentTime, playNextSong, playPrevSong, toggleShuffle } from "../../../../store/slices/playerSlice";
function Bar(props){
  const accessToken = useSelector(state=>state.user.accessToken);
  const {data = []} = useGetFavoriteSongsQuery({
    accessToken: accessToken});
  const dispatch = useDispatch();
  const onMyPlaylist = useSelector(state=>state.player.onMyPlaylist);
  const isMuted = useSelector(state => state.player.isMuted);
  const isLoop = useSelector(state => state.player.isLoop);
  const isPlaying = useSelector(state => state.player.isPlaying);
  const currentDuration = useSelector(state => state.player.currentDuration);
  const currentSong = useSelector(state => state.player.currentSong);
  const currentTime = useSelector(state => state.player.currentTime);
  const isShuffle = useSelector(state=> state.player.isShuffle);
  const audioRef = useRef(null);
  const durationChange = () =>{
    dispatch(setCurrentDuration(audioRef.current.duration));
  }
  const rewind = (e)=>{
    dispatch(setCurrentTime(e.target.value));
    audioRef.current.currentTime = e.target.value;
  }
  const switchMute=()=>{
    dispatch(toggleMute());
  }
  const volumeChange = (e)=>{
    isMuted?switchMute():'';
    audioRef.current.volume = (Number(e.target.value))/100;
  }
  const switchShuffle=()=>{
    dispatch(toggleShuffle(data));
  }
  const switchLoop=()=>{
    dispatch((toggleLoop()));
    isLoop ? audioRef.current.removeAttribute('loop'): audioRef.current.setAttribute('loop',true);
  }
  const handleStart = () => {
    audioRef.current.play();
    dispatch(togglePlay(true));
  };
  const runUp=()=>{
    dispatch(setCurrentTime(audioRef.current.currentTime));
  }
  const handleStop = () => {
    audioRef.current.pause();
    dispatch(togglePlay(false));
  };
  const switchPlay = isPlaying ? handleStop : handleStart;
  const mock =()=>{
    alert('Функционал ещё не готов');
  }
  const playNext = ()=>{
    console.log(onMyPlaylist);
    onMyPlaylist?dispatch(playNextSong(data)):dispatch(playNextSong());
  }
  const playPrev = ()=>{
    if(Number(currentTime)<=5){
      onMyPlaylist?dispatch(playPrevSong(data)):dispatch(playPrevSong());
    }
    else{
      dispatch(setCurrentTime(0));
      audioRef.current.currentTime = 0;
    };
  }
  const handleEnd = ()=>{
    isLoop?'':playNext();
  }
  const {theme} = useThemeContext();
    return (
      <Fragment>
        <StyledTrue__Player autoPlay={isPlaying} onEnded={handleEnd} onDurationChange={durationChange} src={currentSong.track_file} onTimeUpdate={runUp} muted={isMuted?true:false} ref={audioRef} >
        </StyledTrue__Player>
        <StyledBar>
          <StyledTimer>{Math.floor(currentTime/60)}:{Math.floor(currentTime)%60>9?Math.floor(currentTime%60):'0'+Math.floor(currentTime%60)}/{Math.floor(currentDuration/60)}:{currentDuration%60>9?Math.floor(currentDuration%60):'0'+Math.floor(currentDuration%60)}</StyledTimer>
          <StyledBar__Content theme={theme}>
            <ProgressBar rewind={rewind} duration={currentDuration} currentTime={currentTime} player={audioRef}></ProgressBar>
            <StyledBar__Player_Block>
              <StyledBar__Player_Player>
                <StyledPlayer__Controls>
                  <StyledPlayer__Btn_Prev_Button__Icon onClick={playPrev}>
                    <Styled__Btn_Prev_Svg alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </Styled__Btn_Prev_Svg>
                  </StyledPlayer__Btn_Prev_Button__Icon>
                  <StyledPlayer__Btn_Play onClick={switchPlay}>
                  {isPlaying?
                    <Styled__Btn_Play_Svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="5" height="19" fill="#D9D9D9"/>
                      <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                    </Styled__Btn_Play_Svg>:
                    <Styled__Btn_Play_Svg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </Styled__Btn_Play_Svg>}
                  </StyledPlayer__Btn_Play>
                  <StyledPlayer__Btn_Next_Button__Icon onClick={playNext}>
                    <Styled__Btn_Next_Svg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </Styled__Btn_Next_Svg>
                  </StyledPlayer__Btn_Next_Button__Icon>
                  <StyledPlayer__Btn_Repeat_Button__Icon onClick={switchLoop}>
                    <Styled__Btn_Repeat_Svg isloop={(isLoop).toString()} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </Styled__Btn_Repeat_Svg>
                  </StyledPlayer__Btn_Repeat_Button__Icon>
                  <StyledPlayer__Btn_Shuffle_Button__Icon onClick={switchShuffle}>
                    <Styled__Btn_Shuffle_Svg isshuffle={(isShuffle).toString()} alt="shuffle">
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
                      <StyledTrack_Play__Author_Link theme={theme} href="http://">{currentSong.name}</StyledTrack_Play__Author_Link>
                    </StyledTrack_Play__Author>
                    <StyledTrack_Play__Album>
                      <StyledTrack_Play__Album_Link theme={theme} href="http://">{currentSong.author}</StyledTrack_Play__Album_Link>
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
                  <StyledVolume__Image onClick={switchMute}>
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