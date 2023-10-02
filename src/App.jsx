import './App.css';
import AppRoutes from './pages/Routes';
import { useState } from 'react';
function App() {
  const [isToPass, setIsToPass] = useState(false);
  const [user, setUser] = useState({
    mail: '',
    password: '',
    password__double: ''});
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [currentSong, setCurrentSong] = useState({
    id:'7',
    name:'default',
    author:'noname',
    release_date:'2023',
    genre:'classic',
    album:'non-albumed',
    track_file:'/song.mp3', 
    duration_in_seconds:136
  });
  const [currentDuration, setCurrentDuration] = useState('136');
  const [tracks, setTracks]=useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="App">
      <div className="wrapper">
      <div className="container">
        <AppRoutes currentDuration={currentDuration} setCurrentDuration={setCurrentDuration} currentTime={currentTime} setCurrentTime={setCurrentTime} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isLoop={isLoop} setIsLoop={setIsLoop}
        isShuffle={isShuffle} setIsShuffle={setIsShuffle} isMuted={isMuted} setIsMuted={setIsMuted} tracks={tracks} setTracks={setTracks} currentSong={currentSong} setCurrentSong={setCurrentSong} user={user} accessToken={accessToken} refreshToken={refreshToken} setAccessToken={setAccessToken} setRefreshToken={setRefreshToken} isToPass={isToPass} setIsToPass={setIsToPass} setUser={setUser}/>
        <footer className="footer"></footer>
      </div>
    </div>
    </div>
  );
}

export default App;
