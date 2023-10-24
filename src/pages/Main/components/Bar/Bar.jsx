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
import { useDispatch, useSelector } from "react-redux";
import { useGetFavoriteSongsQuery, useGetAllTracksQuery, useAddSongToFavoritesMutation, useDeleteSongFromFavoritesMutation } from "../../../../store/middlewares/favorites";
import { toggleMute, toggleLoop, togglePlay, setCurrentDuration, setCurrentTime, playNextSong, 
  playPrevSong, toggleShuffle, findCategoryArray, addSongToMyShuffledPlaylist, deleteSongFromMyShuffledPlaylist } from "../../../../store/slices/playerSlice";
function Bar(props){
  const isOnCategory = useSelector(state=>state.player.isOnCategory);
  const accessToken = useSelector(state=>state.user.accessToken);
  const {data = []} = useGetFavoriteSongsQuery({
    accessToken: accessToken});
  const dispatch = useDispatch();
  const [likeSong] = useAddSongToFavoritesMutation(); 
  const [dislikeSong] = useDeleteSongFromFavoritesMutation();
  const onMyPlaylist = useSelector(state=>state.player.onMyPlaylist);
  const isMuted = useSelector(state => state.player.isMuted);
  const isLoop = useSelector(state => state.player.isLoop);
  const isPlaying = useSelector(state => state.player.isPlaying);
  const currentDuration = useSelector(state => state.player.currentDuration);
  const currentSong = useSelector(state => state.player.currentSong);
  const currentTime = useSelector(state => state.player.currentTime);
  const isShuffle = useSelector(state=> state.player.isShuffle);
  const audioRef = useRef(null);
  const wasChosenOnCategory = useSelector(state=>state.player.wasChosenOnCategory);
  const rockTracks = useSelector(state=>state.player.rockTracks);
  const electricTracks = useSelector(state=>state.player.electricTracks);
  const classicTracks = useSelector(state=>state.player.classicTracks);
  const handleLike = async ()=>{
    try{
      await likeSong({id: currentSong.id, accessToken: accessToken}).unwrap().then((payload)=>{
        console.log(payload);
      })} 
    catch (error) {
        alert(error);
      }
    dispatch((addSongToMyShuffledPlaylist(currentSong)));
  }
  const handleDislike = async()=>{
    try{
      await dislikeSong({id: currentSong.id, accessToken: accessToken}).unwrap().then((payload)=>{
        console.log(payload);
      })} 
    catch (error) {
        alert(error);
      }
    dispatch((deleteSongFromMyShuffledPlaylist(currentSong)));
  }
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
    isLoop ? audioRef.current.removeAttribute('loop'):audioRef.current.setAttribute('loop',true);
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
  const findArray=()=>{
    if(rockTracks.includes(currentSong)){
      return rockTracks;
    }
    if(electricTracks.includes(currentSong)){
      return electricTracks;
    }
    if(classicTracks.includes(currentSong)){
      return classicTracks;
    }
  }
  const playNext = ()=>{
    wasChosenOnCategory?dispatch(findCategoryArray()):'';
    console.log(data);
    onMyPlaylist?dispatch(playNextSong(data)):wasChosenOnCategory?dispatch(playNextSong(findArray())):dispatch(playNextSong());
  }
  const playPrev = ()=>{
    wasChosenOnCategory?dispatch(findCategoryArray()):'';
    if(Number(currentTime)<=5){
      onMyPlaylist?dispatch(playPrevSong(data)):wasChosenOnCategory?dispatch(playPrevSong(findArray())):dispatch(playPrevSong());
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
                      <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-prev":"img/icon/sprite.svg#icon-prev"}></use>
                    </Styled__Btn_Prev_Svg>
                  </StyledPlayer__Btn_Prev_Button__Icon>
                  <StyledPlayer__Btn_Play onClick={switchPlay}>
                  {isPlaying?
                    <Styled__Btn_Play_Svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="5" height="19" fill="#D9D9D9"/>
                      <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                    </Styled__Btn_Play_Svg>:
                    <Styled__Btn_Play_Svg alt="play">
                      <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-play":"img/icon/sprite.svg#icon-play"}></use>
                    </Styled__Btn_Play_Svg>}
                  </StyledPlayer__Btn_Play>
                  <StyledPlayer__Btn_Next_Button__Icon onClick={playNext}>
                    <Styled__Btn_Next_Svg alt="next">
                      <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-next":"img/icon/sprite.svg#icon-next"}></use>
                    </Styled__Btn_Next_Svg>
                  </StyledPlayer__Btn_Next_Button__Icon>
                  <StyledPlayer__Btn_Repeat_Button__Icon onClick={switchLoop}>
                    <Styled__Btn_Repeat_Svg isloop={(isLoop).toString()} alt="repeat">
                      <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-repeat":"img/icon/sprite.svg#icon-repeat"}></use>
                    </Styled__Btn_Repeat_Svg>
                  </StyledPlayer__Btn_Repeat_Button__Icon>
                  <StyledPlayer__Btn_Shuffle_Button__Icon onClick={switchShuffle}>
                    <Styled__Btn_Shuffle_Svg isshuffle={(isShuffle).toString()} alt="shuffle">
                      <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-shuffle":"img/icon/sprite.svg#icon-shuffle"}></use>
                    </Styled__Btn_Shuffle_Svg>
                  </StyledPlayer__Btn_Shuffle_Button__Icon>
                </StyledPlayer__Controls>
                <StyledPlayer__Track_Play_Track__Play>
                  <StyledTrack_Play__Contain>
                    <StyledTrack_Play__Image>
                      <StyledTrack_Play__Svg alt="music">
                        <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-note":"img/icon/sprite.svg#icon-note"}></use>
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
                    {data!==undefined?data.find(elem=>elem.id===currentSong.id)?
                      <StyledTrack_Play__Dislike onClick={handleDislike}>
                        <StyledTrack_Play__Dislike_Svg alt="dislike" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill="#B672FF"/>
                          <path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#B672FF"/>
                        </StyledTrack_Play__Dislike_Svg>
                      </StyledTrack_Play__Dislike>:
                      <StyledTrack_Play__Like onClick={handleLike}>
                        <StyledTrack_Play__Like_Svg alt="like">
                          <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-like":"img/icon/sprite.svg#icon-like"}></use>
                        </StyledTrack_Play__Like_Svg>
                      </StyledTrack_Play__Like>:''}
                  </StyledTrack_Play__Like_Dis>
                </StyledPlayer__Track_Play_Track__Play>
              </StyledBar__Player_Player>
              <StyledBar__Volume_Block_Volume>
                <StyledVolume__Content>
                  <StyledVolume__Image onClick={switchMute}>
                    <StyledVolume__Svg alt="volume">
                      <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#icon-volume":"img/icon/sprite.svg#icon-volume"}></use>
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