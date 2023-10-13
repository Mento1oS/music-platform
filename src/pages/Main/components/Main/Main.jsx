import Centerblock from '../Centerblock/Centerblock';
import { Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { StyledMain } from './styles';
import Sidebar from '../Sidebar/Sidebar';
import { Layout } from '../Layout/Layout';
import MyPlaylist from '../MyPlaylist/MyPlaylist';
function Main(props){
    return(         
        <StyledMain>
          <Nav/>
          <Routes>
            <Route element={<Layout/>}>
              <Route index element={<Centerblock/>}/>
              <Route path='/myplaylist' element={<MyPlaylist/>}/>
            </Route>
          </Routes>
          <Sidebar/>
        </StyledMain>
    );
}
export default Main;