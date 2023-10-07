import { StyledColumn1, StyledColumn2, 
  StyledColumn3, StyledPlaylist__Item, 
  StyledPlaylist__Track_Track, StyledTrack__Album,
  StyledTrack__Album_Link, StyledTrack__Author, 
  StyledTrack__Author_Link, StyledTrack__Time_Svg, 
  StyledTrack__Time_Text, StyledTrack__Title, 
  StyledTrack__Title_Image, StyledTrack__Title_Link, 
  StyledTrack__Title_Span, StyledTrack__Title_Svg, Sty } from "./styles";
export default function PlayList__item(props){
    return(
          <StyledPlaylist__Item>
            <StyledPlaylist__Track_Track onClick={()=>{
                  props.setCurrentSong(()=>{
                        return props.song});
                  props.setIsPlaying(true);}}>
              <StyledTrack__Title>
                <StyledTrack__Title_Image>
                  <StyledTrack__Title_Svg alt="music">
                    {props.isSkeleton?(<img src='/img/Group12.png'></img>):
                      (<use xlinkHref="img/icon/sprite.svg#icon-note"></use>)}
                  </StyledTrack__Title_Svg>
                </StyledTrack__Title_Image>
                  {props.isSkeleton ? <StyledColumn1></StyledColumn1>
                    :<div className='track__title_text'>
                      <StyledTrack__Title_Link href="http://">
                        {props.song.name}
                        <StyledTrack__Title_Span>
                          {props.span? props.span: ''}
                        </StyledTrack__Title_Span>
                      </StyledTrack__Title_Link></div>}
              </StyledTrack__Title>
              <StyledTrack__Author>
                {props.isSkeleton? <StyledColumn2></StyledColumn2>
                  :<StyledTrack__Author_Link href="http://">{props.song.author}</StyledTrack__Author_Link>}
              </StyledTrack__Author>
              {props.isSkeleton? <StyledColumn3></StyledColumn3>
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