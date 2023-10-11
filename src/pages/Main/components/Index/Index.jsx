import { Fragment, useEffect, useRef } from 'react';
import { useState } from 'react';
import Bar from '../Bar/Bar';
import Main from '../Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { setTracks } from '../../../../store/slices/playerSlice';
import { setIsSkeleton } from '../../../../store/slices/themeSlice';
import { setAccessToken, setRefreshToken } from '../../../../store/slices/userSlice';
export default function Index(props){
  const currentSong = useSelector(state=>state.player.currentSong);
  const refreshToken = useSelector(state=>state.user.refreshToken);
  const user = useSelector(state=>state.user.user);
  const dispatch = useDispatch();
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
    useEffect(()=>{
      fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(setTracks(json));
        dispatch(setIsSkeleton(false));
      })},[]);
  return(
      <Fragment>
          <Main/>
          {currentSong.track_file?<Bar/>:''}
      </Fragment>
  )
}