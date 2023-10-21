import { useDispatch, useSelector } from "react-redux";
import { useThemeContext } from "../../../../providers/ThemeProvider";
import { useAddSongToFavoritesMutation, useDeleteSongFromFavoritesMutation, useGetAllTracksQuery } from "../../../../store/middlewares/favorites";
import { StyledColumn1, StyledColumn2, 
  StyledColumn3, StyledPlaylist__Item, StyledCircle,
  StyledPlaylist__Track_Track, StyledTrack__Album,
  StyledTrack__Album_Link, StyledTrack__Author, 
  StyledTrack__Author_Link, StyledTrack__Time_Svg, 
  StyledTrack__Time_Text, StyledTrack__Title, 
  StyledTrack__Title_Image, StyledTrack__Title_Link, 
  StyledTrack__Title_Span, StyledTrack__Title_Svg, StyledBubble } from "./styles";
import { isOnMyPlayList, setCurrentSong, togglePlay, addSongToMyShuffledPlaylist, deleteSongFromMyShuffledPlaylist } from "../../../../store/slices/playerSlice";
export default function PlayList__item(props){
  const isSkeleton = useSelector(state=>state.theme.isSkeleton);
  const {data = []} = useGetAllTracksQuery();
  const [likeSong] = useAddSongToFavoritesMutation(); 
  const [dislikeSong] = useDeleteSongFromFavoritesMutation()
  const handleLike = async ()=>{
    try{
      await likeSong({id: props.number, accessToken: accessToken}).unwrap().then((payload)=>{
        console.log(payload);
      })} 
    catch (error) {
        alert(error);
      }
    dispatch((addSongToMyShuffledPlaylist(props.song)));
  }
  const handleDislike = async()=>{
    try{
      await dislikeSong({id: props.number, accessToken: accessToken}).unwrap().then((payload)=>{
        console.log(payload);
      })} 
    catch (error) {
        alert(error);
      }
    dispatch((deleteSongFromMyShuffledPlaylist(props.song)));
  }
  const user = useSelector(state=>state.user.user);
  const {theme} = useThemeContext();
  const dispatch = useDispatch();
  
  const isPlaying =useSelector(state=>state.player.isPlaying); 
  const accessToken = useSelector(state=>state.user.accessToken);
    return(
          <StyledPlaylist__Item>
            <StyledPlaylist__Track_Track onClick={()=>{
                  dispatch(setCurrentSong(props.song));
                  dispatch(togglePlay(true));
                  dispatch(isOnMyPlayList(props.mine));
                }}>
              <StyledTrack__Title>
                <StyledTrack__Title_Image>
                {isSkeleton?<img src='/img/Group12.png'></img>:props.active?isPlaying?
                  <StyledBubble></StyledBubble>:<StyledCircle></StyledCircle>:
                  <StyledTrack__Title_Svg active={props.active.toString()} alt="music">  
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrack__Title_Svg>}
                </StyledTrack__Title_Image>
                  {isSkeleton ? <StyledColumn1></StyledColumn1>
                    :<div className='track__title_text'>
                      <StyledTrack__Title_Link theme={theme} onClick={e=>e.preventDefault()} href="http://">
                        {props.song.name}
                        <StyledTrack__Title_Span theme={theme}>
                          {props.span? props.span: ''}
                        </StyledTrack__Title_Span>
                      </StyledTrack__Title_Link></div>}
              </StyledTrack__Title>
              <StyledTrack__Author>
                {isSkeleton? <StyledColumn2></StyledColumn2>
                  :<StyledTrack__Author_Link theme={theme} onClick={e=>e.preventDefault()} href="http://">{props.song.author}</StyledTrack__Author_Link>}
              </StyledTrack__Author>
              {isSkeleton? <StyledColumn3></StyledColumn3>
                :<><StyledTrack__Album>
                  <StyledTrack__Album_Link onClick={e=>e.preventDefault()} href="http://">{props.song.album}</StyledTrack__Album_Link>
                  </StyledTrack__Album>
                  <div className='track__time'>
                    {data && data.find(elem=>elem.id===props.number).stared_user.find(person=>person.email===user.mail)===undefined?
                      <StyledTrack__Time_Svg onClick={handleLike} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </StyledTrack__Time_Svg>:
                      <StyledTrack__Time_Svg onClick={handleDislike} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill="#B672FF"/>
                        <path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#B672FF"/>
                      </StyledTrack__Time_Svg>
                    }
                    <StyledTrack__Time_Text>{Math.floor(props.song.duration_in_seconds/60)}:{props.song.duration_in_seconds%60>9?props.song.duration_in_seconds%60:'0'+props.song.duration_in_seconds%60}</StyledTrack__Time_Text>
                  </div>
                </>}
            </StyledPlaylist__Track_Track>
          </StyledPlaylist__Item>
    );
}