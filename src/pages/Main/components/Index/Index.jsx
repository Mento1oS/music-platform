import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTracks } from '../../../../store/slices/playerSlice';
import { setIsSkeleton } from '../../../../store/slices/themeSlice';
import { setAccessToken, setRefreshToken } from '../../../../store/slices/userSlice';
import { useGetAllTracksInitialQuery } from '../../../../store/middlewares/favorites';
export default function Index({children}){
  const refreshToken = useSelector(state=>state.user.refreshToken);
  const user = useSelector(state=>state.user.user);
  const tracks = useSelector(state=>state.player.trackList);
  const refreshTime = useSelector(state=>state.user.refreshTime);
  const dispatch = useDispatch();
  const {data =[], isSuccess} = useGetAllTracksInitialQuery();
  useEffect(()=>{
    dispatch(setTracks(data));
  },[isSuccess]);
  useEffect(()=>{
    dispatch(setIsSkeleton(false));
  },[tracks.length>0]);
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
              dispatch(setAccessToken(json.access));});
            }, refreshTime);
        })
      return () => clearInterval(interval.current)
    },[]);
  return(
      children 
  )
}