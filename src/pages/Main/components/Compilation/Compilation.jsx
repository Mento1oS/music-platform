import { useParams } from 'react-router-dom';
import { useThemeContext } from '../../../../providers/ThemeProvider';
import { StyledCenterblock__Content,
  StyledCenterblock__Search_Search, StyledCenterblock__h2, 
  StyledContent__Playlist_Playlist, StyledContent__Title_Playlist_Title, 
  StyledMain__Centerblock_CenterBlock, StyledPlaylist_Title__Col__Col01, 
  StyledPlaylist_Title__Col__Col02, StyledPlaylist_Title__Col__Col03, 
  StyledPlaylist_Title__Col__Col04, StyledPlaylist_Title__Svg, 
  StyledSearch__Svg, StyledSearch__Text } from './styles';
import PlayList__item from '../PlayListItem/PlayListItem';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../../../store/slices/playerSlice';
export default function Compilation(){
    const currentSong = useSelector(state=>state.player.currentSong)
    const params = useParams();
    const {theme} = useThemeContext();
    const dispatch = useDispatch(); 
    const rockTracks = useSelector(state=>state.player.rockTracks); 
    const electricTracks = useSelector(state=>state.player.electricTracks); 
    const classicTracks = useSelector(state=>state.player.classicTracks); 
    const search = useSelector(state=>state.player.search);
    return(
        <StyledMain__Centerblock_CenterBlock>
            <StyledCenterblock__Search_Search>
              {theme.name==='dark'?
                <StyledSearch__Svg>
                  <use xlinkHref="../img/icon/sprite.svg#icon-search"></use>
                </StyledSearch__Svg>:
                <StyledSearch__Svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.92773 10.7744L13.3701 15.064" stroke="black" strokeLinecap="round"/>
                  <circle cx="6.48533" cy="6.48477" r="5.5" transform="rotate(-38.7469 6.48533 6.48477)" stroke="black"/>
                </StyledSearch__Svg>}
              <StyledSearch__Text theme={theme}
                type="search"
                placeholder="Поиск"
                name="search"
                value={search}
                onInput={e=>dispatch(setSearch(e.target.value))}
              />
            </StyledCenterblock__Search_Search>
            <StyledCenterblock__h2>{Number(params.id)===1?'Рок музыка':Number(params.id)===2?'Электронная музыка':Number(params.id)===3?'Классическая музыка':''}</StyledCenterblock__h2>
            <StyledCenterblock__Content>
              <StyledContent__Title_Playlist_Title>
                <StyledPlaylist_Title__Col__Col01>Трек</StyledPlaylist_Title__Col__Col01>
                <StyledPlaylist_Title__Col__Col02>ИСПОЛНИТЕЛЬ</StyledPlaylist_Title__Col__Col02>
                <StyledPlaylist_Title__Col__Col03>АЛЬБОМ</StyledPlaylist_Title__Col__Col03>
                <StyledPlaylist_Title__Col__Col04>
                  <StyledPlaylist_Title__Svg alt="time">
                    <use xlinkHref="../img/icon/sprite.svg#icon-watch"></use>
                  </StyledPlaylist_Title__Svg>
                </StyledPlaylist_Title__Col__Col04>
              </StyledContent__Title_Playlist_Title>
              <StyledContent__Playlist_Playlist>
                {Number(params.id)===1?rockTracks.filter(elem=>elem.name.includes(search)).map((elem=><PlayList__item category={true} mine={false} active={elem.id===currentSong.id} number={elem.id} key={elem.id} song={elem}/>)):
                 Number(params.id)===2?electricTracks.filter(elem=>elem.name.includes(search)).map((elem=><PlayList__item category={true} mine={false} active={elem.id===currentSong.id} number={elem.id} key={elem.id} song={elem}/>)):
                 Number(params.id)===3?classicTracks.filter(elem=>elem.name.includes(search)).map((elem=><PlayList__item category={true} mine={false} active={elem.id===currentSong.id} number={elem.id} key={elem.id} song={elem}/>)):''}
              </StyledContent__Playlist_Playlist>
            </StyledCenterblock__Content>
          </StyledMain__Centerblock_CenterBlock>
    )
}