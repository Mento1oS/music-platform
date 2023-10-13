import { Routes, Route } from 'react-router-dom';
import Index from './Main/components/Index/Index';
import SignIn from './SignIn/components/SignIn/SignIn';
import SignUp from './SignUp/components/SignUp/SignUp';
import NotFoundPage from './NotFound/NotFound';
import MyPlaylist from './Main/components/MyPlaylist/MyPlaylist';
import { ProtectedRoute } from './ProtectedRoute';
import { useSelector } from 'react-redux';
export default function AppRoutes(props){
    const isToPass = useSelector(state => state.user.isToPass);
    return(
        <Routes>
            <Route element={<ProtectedRoute isAllowed={isToPass}/>}>
                <Route path='/' element={
                    <Index/>
                }/>
            </Route>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}