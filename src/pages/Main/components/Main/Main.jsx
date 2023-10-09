import Centerblock from '../Centerblock/Centerblock';
import Nav from '../Nav/Nav';
import { StyledMain } from './styles';
import Sidebar from '../Sidebar/Sidebar';
function Main(props){
    return(         
        <StyledMain>
          <Nav user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass}/>
          <Centerblock currentDuration={props.currentDuration} setCurrentDuration={props.setCurrentDuration} isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} currentSong={props.currentSong} setCurrentSong={props.setCurrentSong} tracks={props.tracks} isSkeleton={props.isSkeleton}/>
          <Sidebar user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass} isSkeleton={props.isSkeleton}/>
        </StyledMain>
    );
}
export default Main;