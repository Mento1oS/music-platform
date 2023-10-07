import c from './Centerblock.module.css';
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
    return(
        <StyledMain__Centerblock_CenterBlock>
            <StyledCenterblock__Search_Search>
              <StyledSearch__Svg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </StyledSearch__Svg>
              <StyledSearch__Text
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </StyledCenterblock__Search_Search>
            <StyledCenterblock__h2>Треки</StyledCenterblock__h2>
            <StyledCenterblock__Filter>
              <StyledFilter__Title>Искать по:</StyledFilter__Title>
              <Styled_Btn_Text_Filter_Button_Author dropoutStatus={dropoutStatus[0]} onClick={switchHandle}>
                исполнителю
                {dropoutStatus[0]&&<StyledFilter__List__Wrapper_Author__List><Dropout data={singers}/></StyledFilter__List__Wrapper_Author__List>}
              </Styled_Btn_Text_Filter_Button_Author>
              <Styled_Btn_Text_Filter_Button_Year dropoutStatus={dropoutStatus[1]} onClick={switchHandle}>
                году выпуска {dropoutStatus[1] && <StyledFilter__List__Wrapper_Year__List><Dropout data={years}/></StyledFilter__List__Wrapper_Year__List>}
              </Styled_Btn_Text_Filter_Button_Year>
              <Styled_Btn_Text_Filter_Button_Genre dropoutStatus={dropoutStatus[2]} onClick={switchHandle}>
                жанру{dropoutStatus[2] && <StyledFilter__List__Wrapper_Genre__List><Dropout data={genres}/></StyledFilter__List__Wrapper_Genre__List>}</Styled_Btn_Text_Filter_Button_Genre>
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