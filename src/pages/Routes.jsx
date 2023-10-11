import { Routes, Route } from 'react-router-dom';
import Index from './Main/components/Index/Index';
import SignIn from './SignIn/components/SignIn/SignIn';
import SignUp from './SignUp/components/SignUp/SignUp';
import NotFoundPage from './NotFound/NotFound';
import { ProtectedRoute } from './ProtectedRoute';
import MyPlaylist from './MyPlaylist/components/MyPlaylist/MyPlaylist';
import Compilation from './Compilation/components/Compilation/Compilation';
import { useSelector } from 'react-redux';
export default function AppRoutes(props){
    const isToPass = useSelector(state => state.user.isToPass);
    return(
        <Routes>
            <Route element={<ProtectedRoute isAllowed={isToPass}/>}>
                <Route path='/' element={<Index/>}/>
                <Route path='/myplaylist' element={<MyPlaylist/>}></Route>
                <Route path='/compilation/:id' element={<Compilation/>}></Route>
            </Route>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}