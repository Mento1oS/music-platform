import { Routes, Route } from 'react-router-dom';
import Index from './Main/components/Index/Index';
import SignIn from './SignIn/components/SignIn/SignIn';
import SignUp from './SignUp/components/SignUp/SignUp';
import NotFoundPage from './NotFound/NotFound';
import { ProtectedRoute } from './ProtectedRoute';
import MyPlaylist from './MyPlaylist/components/MyPlaylist/MyPlaylist';
import Compilation from './Compilation/components/Compilation/Compilation';
export default function AppRoutes(props){
    return(
        <Routes>
            <Route element={<ProtectedRoute isAllowed={props.isToPass}/>}>
                <Route path='/' element={<Index currentDuration={props.currentDuration} setCurrentDuration={props.setCurrentDuration} currentTime={props.currentTime} setCurrentTime={props.setCurrentTime} isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} isLoop={props.isLoop} setIsLoop={props.setIsLoop}
                    isShuffle={props.isShuffle} setIsShuffle={props.setIsShuffle} isMuted={props.isMuted} setIsMuted={props.setIsMuted} tracks={props.tracks} setTracks={props.setTracks} currentSong={props.currentSong} setCurrentSong={props.setCurrentSong} accessToken={props.accessToken} refreshToken={props.refreshToken} setAccessToken={props.setAccessToken} setRefreshToken={props.setRefreshToken} user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass}/>}/>
                <Route path='/myplaylist' element={<MyPlaylist/>}></Route>
                <Route path='/compilation/:id' element={<Compilation/>}></Route>
            </Route>
            <Route path="/signin" element={<SignIn user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass}/>} />
            <Route path="/signup" element={<SignUp user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass}/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}