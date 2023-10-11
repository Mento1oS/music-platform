import { useDispatch, useSelector } from "react-redux";
import { useThemeContext } from "../../../../providers/ThemeProvider";
import { StyledColumn1, StyledColumn2, 
  StyledColumn3, StyledPlaylist__Item, StyledCircle,
  StyledPlaylist__Track_Track, StyledTrack__Album,
  StyledTrack__Album_Link, StyledTrack__Author, 
  StyledTrack__Author_Link, StyledTrack__Time_Svg, 
  StyledTrack__Time_Text, StyledTrack__Title, 
  StyledTrack__Title_Image, StyledTrack__Title_Link, 
  StyledTrack__Title_Span, StyledTrack__Title_Svg, StyledBubble } from "./styles";
import { setCurrentSong, togglePlay } from "../../../../store/slices/playerSlice";
export default function PlayList__item(props){
  const {theme} = useThemeContext();
  const dispatch = useDispatch();
  const isSkeleton = useSelector(state=>state.theme.isSkeleton);
  const isPlaying =useSelector(state=>state.player.isPlaying); 
    return(
          <StyledPlaylist__Item>
            <StyledPlaylist__Track_Track onClick={()=>{
                  dispatch(setCurrentSong(props.song));
                  dispatch(togglePlay(true));}}>
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
                      <StyledTrack__Title_Link theme={theme} href="http://">
                        {props.song.name}
                        <StyledTrack__Title_Span theme={theme}>
                          {props.span? props.span: ''}
                        </StyledTrack__Title_Span>
                      </StyledTrack__Title_Link></div>}
              </StyledTrack__Title>
              <StyledTrack__Author>
                {isSkeleton? <StyledColumn2></StyledColumn2>
                  :<StyledTrack__Author_Link theme={theme} href="http://">{props.song.author}</StyledTrack__Author_Link>}
              </StyledTrack__Author>
              {isSkeleton? <StyledColumn3></StyledColumn3>
                :<><StyledTrack__Album>
                  <StyledTrack__Album_Link href="http://">{props.song.album}</StyledTrack__Album_Link>
                  </StyledTrack__Album>
                  <div className='track__time'>
                      <StyledTrack__Time_Svg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </StyledTrack__Time_Svg>
                      <StyledTrack__Time_Text>{Math.floor(props.song.duration_in_seconds/60)}:{props.song.duration_in_seconds%60>9?props.song.duration_in_seconds%60:'0'+props.song.duration_in_seconds%60}</StyledTrack__Time_Text>
                  </div>
                </>}
            </StyledPlaylist__Track_Track>
          </StyledPlaylist__Item>
    );
}