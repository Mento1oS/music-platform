import { Outlet } from "react-router-dom";
import Index from "../Index/Index";
import Main from "../Main/Main";
import Bar from "../Bar/Bar";
import { useSelector } from 'react-redux';
export const Layout=()=>{
    const currentSong = useSelector(state=>state.player.currentSong);
    return(
        <Index>
            <Main>
                <Outlet/>
            </Main>
            {currentSong.track_file?<Bar/>:''}
        </Index>
    )
}