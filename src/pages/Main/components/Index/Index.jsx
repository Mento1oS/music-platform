import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTracks } from '../../../../store/slices/playerSlice';
import { setIsSkeleton } from '../../../../store/slices/themeSlice';
import { setAccessToken, setRefreshToken } from '../../../../store/slices/userSlice';
import { useGetAllTracksInitialQuery } from '../../../../store/middlewares/favorites';
export default function Index({children}){
  const refreshToken = useSelector(state=>state.user.refreshToken);
  const user = useSelector(state=>state.user.user);
  const dispatch = useDispatch();
  const {data =[], isSuccess} = useGetAllTracksInitialQuery();
  dispatch(setTracks(data));
    if(isSuccess){
      dispatch(setIsSkeleton(false));
    }
    const interval=useRef(0);
    useEffect(()=>{
        fetch("https://skypro-music-api.skyeng.tech/user/token/", {
            method: "POST",
            body: JSON.stringify({
              email: user.mail,
              password: user.password,
            }),
            headers: {
              "content-type": "application/json",
            },
          })
        .then((response) => response.json())
        .then((json) => {
          dispatch(setRefreshToken(json.refresh));
          dispatch(setAccessToken(json.access));
          console.log(json);
          return(json)})
        .then((data)=>{
          interval.current = setInterval(() => {
            fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
              method: "POST",
              body: JSON.stringify({
                refresh: refreshToken?refreshToken:data.refresh,
              }),
              headers: {
                "content-type": "application/json",
              },
            })
            .then((response) => response.json())
            .then((json) =>{
              console.log(data);
              console.log(json);
              dispatch(setAccessToken(json.access))});
            }, 80000);
        })
      return () => clearInterval(interval.current)
    },[]);
  return(
      children 
  )
}