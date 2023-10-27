
import Nav from '../Nav/Nav';
import { StyledMain } from './styles';
import Sidebar from '../Sidebar/Sidebar';
function Main({children}){
    return(         
        <StyledMain>
          <Nav/>
          {children}
          <Sidebar/>
        </StyledMain>
    );
}
export default Main;