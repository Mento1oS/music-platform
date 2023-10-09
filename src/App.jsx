// import './App.css';
import AppRoutes from './pages/Routes';
import { useState } from 'react';
import { GlobalStyle } from './globalStyles';
import { Container, Wrapper } from './styles';
import { themes, ThemeContext } from './providers/ThemeProvider';
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
    track_file:'', 
    duration_in_seconds:136
  });
  const [currentDuration, setCurrentDuration] = useState('136');
  const [tracks, setTracks]=useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const toggleTheme = ()=>{
    if(currentTheme===themes.dark){
      setCurrentTheme(themes.light);
      return}
    setCurrentTheme(themes.dark);
  }
  return (
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
      <div className="App">
        <Wrapper theme={currentTheme}>
          <Container theme={currentTheme}>
            <GlobalStyle theme={currentTheme}/>
            <AppRoutes currentDuration={currentDuration} setCurrentDuration={setCurrentDuration} currentTime={currentTime} setCurrentTime={setCurrentTime} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isLoop={isLoop} setIsLoop={setIsLoop}
              isShuffle={isShuffle} setIsShuffle={setIsShuffle} isMuted={isMuted} setIsMuted={setIsMuted} tracks={tracks} setTracks={setTracks} currentSong={currentSong} setCurrentSong={setCurrentSong} user={user} accessToken={accessToken} refreshToken={refreshToken} setAccessToken={setAccessToken} setRefreshToken={setRefreshToken} isToPass={isToPass} setIsToPass={setIsToPass} setUser={setUser}/>
            <footer className="footer"></footer>
          </Container>
        </Wrapper>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
