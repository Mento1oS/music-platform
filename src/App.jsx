import AppRoutes from './pages/Routes';
import { useEffect, useState } from 'react';
import { GlobalStyle } from './globalStyles';
import { Container, Wrapper } from './styles';
import { themes, ThemeContext } from './providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTheme } from './store/slices/themeSlice';
function App() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state=>state.theme.currentTheme);
  // const [user, setUser] = useState({
  //   mail: '',
  //   password: '',
  //   password__double: ''});
  useEffect(()=>{
    dispatch(setCurrentTheme(themes.dark));
  },[]);
  const toggleTheme = ()=>{
    if(currentTheme===themes.dark){
      dispatch(setCurrentTheme(themes.light));
      return}
    dispatch(setCurrentTheme(themes.dark));
  }
  return (
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
      <div className="App">
        <Wrapper theme={currentTheme}>
          <Container theme={currentTheme}>
            <GlobalStyle theme={currentTheme}/>
            <AppRoutes/>
            <footer className="footer"></footer>
          </Container>
        </Wrapper>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
