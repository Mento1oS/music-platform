import Centerblock from '../Centerblock/Centerblock';
import Nav from '../Nav/Nav';
import { StyledMain } from './styles';
import Sidebar from '../Sidebar/Sidebar';
function Main(props){
    return(         
        <StyledMain>
          <Nav/>
          <Centerblock/>
          <Sidebar/>
        </StyledMain>
    );
}
export default Main;