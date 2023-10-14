import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn/components/SignIn/SignIn';
import SignUp from './SignUp/components/SignUp/SignUp';
import NotFoundPage from './NotFound/NotFound';
import { ProtectedRoute } from './ProtectedRoute';
import { useSelector } from 'react-redux';
import { Layout } from './Main/components/Layout/Layout';
import Centerblock from './Main/components/Centerblock/Centerblock';
import MyPlaylist from './Main/components/MyPlaylist/MyPlaylist';
export default function AppRoutes(props){
    const isToPass = useSelector(state => state.user.isToPass);
    return(
        <Routes>
            <Route element={<ProtectedRoute isAllowed={isToPass}/>}>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Centerblock/>}></Route>
                    <Route path='/myplaylist' element={<MyPlaylist/>}></Route>
                </Route>
            </Route>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}