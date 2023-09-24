import Centerblock from '../Centerblock/Centerblock';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import c from './Main.module.css';
import { useState } from 'react';
function Main(props){
  const [isSkeleton, setIsSkeleton] = useState(true);
  const timeOut = setTimeout(()=>{
    setIsSkeleton(false);
  }, 5000);
    return(         
        <main className={c.main}>
          <Nav user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass}/>
          <Centerblock isSkeleton={isSkeleton}/>
          <Sidebar user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass} isSkeleton={isSkeleton}/>
        </main>
    );
}
export default Main;