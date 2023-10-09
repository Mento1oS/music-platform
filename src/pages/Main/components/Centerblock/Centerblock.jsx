import PlayList__item from '../PlayListItem/PlayListItem';
import Dropout from '../Dropout/Dropout';
import { useState } from 'react';
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
  Styled_Btn_Text_Filter_Button_Year } from './styles';
import { useThemeContext } from '../../../../providers/ThemeProvider';
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
              />
            </StyledCenterblock__Search_Search>
            <StyledCenterblock__h2>Треки</StyledCenterblock__h2>
            <StyledCenterblock__Filter>
              <StyledFilter__Title>Искать по:</StyledFilter__Title>
              <Styled_Btn_Text_Filter_Button_Author theme={theme} dropout={dropoutStatus[0].toString()} onClick={switchHandle}>
                исполнителю
                {dropoutStatus[0]&&<StyledFilter__List__Wrapper_Author__List theme={theme}><Dropout data={singers}/></StyledFilter__List__Wrapper_Author__List>}
              </Styled_Btn_Text_Filter_Button_Author>
              <Styled_Btn_Text_Filter_Button_Year theme={theme} dropout={dropoutStatus[1].toString()} onClick={switchHandle}>
                году выпуска {dropoutStatus[1] && <StyledFilter__List__Wrapper_Year__List theme={theme}><Dropout data={years}/></StyledFilter__List__Wrapper_Year__List>}
              </Styled_Btn_Text_Filter_Button_Year>
              <Styled_Btn_Text_Filter_Button_Genre theme={theme} dropout={dropoutStatus[2].toString()} onClick={switchHandle}>
                жанру{dropoutStatus[2] && <StyledFilter__List__Wrapper_Genre__List theme={theme}><Dropout data={genres}/></StyledFilter__List__Wrapper_Genre__List>}</Styled_Btn_Text_Filter_Button_Genre>
            </StyledCenterblock__Filter>
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
              </StyledContent__Playlist_Playlist>
            </StyledCenterblock__Content>
          </StyledMain__Centerblock_CenterBlock>
    )
}
export default Centerblock;