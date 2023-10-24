import PlayList__item from '../PlayListItem/PlayListItem';
import Dropout from '../Dropout/Dropout';
import { StyledCenterblock__Content, StyledCenterblock__Filter,
  StyledCenterblock__Search_Search, StyledCenterblock__h2, 
  StyledContent__Playlist_Playlist, StyledContent__Title_Playlist_Title, 
  StyledFilter__List__Wrapper_Author__List, StyledFilter__List__Wrapper_Genre__List, 
  StyledFilter__List__Wrapper_Year__List, StyledFilter__Title,
  StyledMain__Centerblock_CenterBlock, StyledPlaylist_Title__Col__Col01, 
  StyledPlaylist_Title__Col__Col02, StyledPlaylist_Title__Col__Col03, 
  StyledPlaylist_Title__Col__Col04, StyledPlaylist_Title__Svg, 
  StyledSearch__Svg, StyledSearch__Text, 
  Styled_Btn_Text_Filter_Button_Author, Styled_Btn_Text_Filter_Button_Genre, 
  Styled_Btn_Text_Filter_Button_Year, StyledCounter, StyledSortFilterBlock,
  StyledSort, StyledSortButton, StyledSortingWrapper__List } from './styles';
import { useThemeContext } from '../../../../providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { statusChange } from '../../../../store/slices/dropoutStatusSlice';
import { useEffect } from 'react';
import { setClassicTracks, setElectricTracks, setGenres, setIsOnCategory, setRockTracks, setSearch, setSingers, setYears, toggleSortingIsOpen } from '../../../../store/slices/playerSlice';
function Centerblock(props){
    const dispatch = useDispatch();
    const currentSorting = useSelector(state=>state.player.currentSorting);
    const filters = useSelector(state=>state.player.filters);
    const tracks = useSelector(state=>state.player.trackList);
    const currentSong = useSelector(state=>state.player.currentSong);
    const dropoutStatus = useSelector(state => state.dropoutStatus.status);
    const isSkeleton = useSelector(state=>state.theme.isSkeleton);
    const singers = useSelector(state=>state.player.singers);
    const years = useSelector(state=>state.player.years);
    const genres = useSelector(state=>state.player.genres);
    const search = useSelector(state=>state.player.search);
    const sortingIsOpen = useSelector(state=>state.player.sortingIsOpen);
    const sortVariants = useSelector(state=>state.player.sortVariants);
    useEffect(()=>{
      dispatch(setSingers());
      dispatch(setGenres());
      dispatch(setYears());
      dispatch(setRockTracks(tracks.filter(elem=>elem.genre==='Рок музыка')));
      dispatch(setElectricTracks(tracks.filter(elem=>elem.genre==='Электронная музыка')));
      dispatch(setClassicTracks(tracks.filter(elem=>elem.genre==='Классическая музыка')));
    }, [tracks.length>0]);
    useEffect(()=>{
      dispatch(setIsOnCategory(false));
    },[]);
    const switchHandle=(e)=>{
      const target = e.target;
      if(target.nodeName=='LI'){
        return
      }
      const parent = target.parentElement;
      const children = Array.from(parent.children);
      const index = children.indexOf(target)-1;
      dispatch(statusChange(index));
    }
    const handleSortingButtonClick=(e)=>{
      const target = e.target;
      if(target.nodeName==='LI'){
        return
      }
      dispatch(toggleSortingIsOpen());
    }
    const {theme} = useThemeContext();
    return(
        <StyledMain__Centerblock_CenterBlock>
            <StyledCenterblock__Search_Search>
              {theme.name==='dark'?
                <StyledSearch__Svg>
                  <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
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
            
            <StyledCenterblock__h2>Треки</StyledCenterblock__h2>
            <StyledSortFilterBlock>
              <StyledCenterblock__Filter>
                <StyledFilter__Title>Искать по:</StyledFilter__Title>
                <Styled_Btn_Text_Filter_Button_Author theme={theme} dropout={dropoutStatus[0].toString()} onClick={switchHandle}>
                  {filters.author.length>0?<StyledCounter theme={theme}>{filters.author.length}</StyledCounter>:''}
                  исполнителю
                  {dropoutStatus[0]&&<StyledFilter__List__Wrapper_Author__List theme={theme}><Dropout name='author' data={singers}/></StyledFilter__List__Wrapper_Author__List>}
                </Styled_Btn_Text_Filter_Button_Author>
                <Styled_Btn_Text_Filter_Button_Year theme={theme} dropout={dropoutStatus[1].toString()} onClick={switchHandle}>
                  {filters.release_date.length>0?<StyledCounter theme={theme}>{filters.release_date.length}</StyledCounter>:''}
                  году выпуска {dropoutStatus[1] && <StyledFilter__List__Wrapper_Year__List theme={theme}><Dropout name='release_date' data={years}/></StyledFilter__List__Wrapper_Year__List>}
                </Styled_Btn_Text_Filter_Button_Year>
                <Styled_Btn_Text_Filter_Button_Genre theme={theme} dropout={dropoutStatus[2].toString()} onClick={switchHandle}>
                  {filters.genre.length>0?<StyledCounter theme={theme}>{filters.genre.length}</StyledCounter>:''}
                  жанру{dropoutStatus[2] && <StyledFilter__List__Wrapper_Genre__List theme={theme}><Dropout name='genre' data={genres}/></StyledFilter__List__Wrapper_Genre__List>}</Styled_Btn_Text_Filter_Button_Genre>
              </StyledCenterblock__Filter>
              <StyledSort>
                <StyledFilter__Title>Сортировка:</StyledFilter__Title>
                <StyledSortButton theme={theme} dropout={sortingIsOpen.toString()} onClick={handleSortingButtonClick}>
                  {currentSorting}
                  {sortingIsOpen?<StyledSortingWrapper__List theme={theme}><Dropout name='sort' data={sortVariants}/></StyledSortingWrapper__List>:''}
                </StyledSortButton>
              </StyledSort>
            </StyledSortFilterBlock>
            <StyledCenterblock__Content>
              <StyledContent__Title_Playlist_Title>
                <StyledPlaylist_Title__Col__Col01>Трек</StyledPlaylist_Title__Col__Col01>
                <StyledPlaylist_Title__Col__Col02>ИСПОЛНИТЕЛЬ</StyledPlaylist_Title__Col__Col02>
                <StyledPlaylist_Title__Col__Col03>АЛЬБОМ</StyledPlaylist_Title__Col__Col03>
                <StyledPlaylist_Title__Col__Col04>
                  <StyledPlaylist_Title__Svg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </StyledPlaylist_Title__Svg>
                </StyledPlaylist_Title__Col__Col04>
              </StyledContent__Title_Playlist_Title>
              <StyledContent__Playlist_Playlist>
                {isSkeleton?
                <><PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/>
                <PlayList__item active={false} title='' author='' album='' duration=''/></>
                :tracks.filter(elem=>elem.name.includes(search))
                .filter(elem=>filters.release_date.length>0?filters.release_date.includes(elem.release_date):elem)
                .filter(elem=>filters.genre.length>0?filters.genre.includes(elem.genre):elem)
                .filter(elem=>filters.author.length>0?filters.author.includes(elem.author):elem)
                .sort((a,b)=>{
                  if(currentSorting==='Сначала новые'){
                    a = a.release_date;
                    b = b.release_date;
                    if(a>b){
                      return -1;
                    }
                    if(a<b){
                      return 1;
                    }
                  }
                  if(currentSorting==='Сначала старые'){
                    a = a.release_date;
                    b = b.release_date;
                    if(a<b){
                      return -1;
                    }
                    if(a>b){
                      return 1;
                    }
                  }
                })
                .map((elem=><PlayList__item category={false} mine={false} active={elem.id===currentSong.id} number={elem.id} key={elem.id} song={elem}/>))
                }
              </StyledContent__Playlist_Playlist>
            </StyledCenterblock__Content>
          </StyledMain__Centerblock_CenterBlock>
    )
}
export default Centerblock;