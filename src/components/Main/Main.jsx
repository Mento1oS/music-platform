import Centerblock from '../Centerblock/Centerblock';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import c from './Main.module.css';
function Main(){
    return(         
        <main className={c.main}>
          <Nav/>
          <Centerblock/>
          <Sidebar/>
        </main>
    );
}
export default Main;