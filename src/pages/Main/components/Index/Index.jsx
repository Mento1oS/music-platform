import { Fragment, useEffect, useRef } from 'react';
import { useState } from 'react';
import Bar from '../Bar/Bar';
import Main from '../Main/Main';
export default function Index(props){
    const [isSkeleton, setIsSkeleton] = useState(true);
    const interval=useRef(0);
    useEffect(()=>{
        fetch("https://skypro-music-api.skyeng.tech/user/token/", {
            method: "POST",
            body: JSON.stringify({
              email: props.user.mail,
              password: props.user.password,
            }),
            headers: {
              "content-type": "application/json",
            },
          })
        .then((response) => response.json())
        .then((json) => {
          props.setRefreshToken(json.refresh);
          props.setAccessToken(json.access);
          console.log(json);
          return(json)})
        .then((data)=>{
          interval.current = setInterval(() => {
            fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
              method: "POST",
              body: JSON.stringify({
                refresh: props.refreshToken?props.refreshToken:data.refresh,
              }),
              headers: {
                "content-type": "application/json",
              },
            })
            .then((response) => response.json())
            .then((json) =>{
              console.log(data);
              console.log(json);
              props.setAccessToken(json.access)});
            }, 80000);
        })
      return () => clearInterval(interval.current)
    },[]);
    useEffect(()=>{
      // console.log(`${data.refresh} call from song search`);
      fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        props.setTracks(()=>{
          return json;
        })
        setIsSkeleton(false);
      })},[]);
  return(
      <Fragment>
          <Main currentDuration={props.currentDuration} setCurrentDuration={props.setCurrentDuration} isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} tracks={props.tracks} currentSong={props.currentSong} setCurrentSong={props.setCurrentSong} isSkeleton={isSkeleton} user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass}/>
          <Bar currentDuration={props.currentDuration} setCurrentDuration={props.setCurrentDuration} currentTime={props.currentTime} setCurrentTime={props.setCurrentTime} isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} isLoop={props.isLoop} setIsLoop={props.setIsLoop}
        isShuffle={props.isShuffle} setIsShuffle={props.setIsShuffle} isMuted={props.isMuted} setIsMuted={props.setIsMuted} currentSong={props.currentSong} setCurrentSong={props.setCurrentSong}/>
      </Fragment>
  )
}