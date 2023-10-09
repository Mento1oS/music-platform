import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { StyledWrapper, StyledContainer__Enter, 
  StyledModal__Form__Login, StyledModal__Block, 
  StyledModal__Logo, StyledModal__Btn__Enter, 
  StyledModal__Btn__Signup, StyledNavLink,
  StyledModal__Input_Login, StyledModal__Input_Password} from './styles';
export default function SignIn(props){
  const [signIn, setSignIn] = useState({
    mail:'',
    password:''});
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(signIn.mail!=='' && signIn.password!==''){
      fetch("https://skypro-music-api.skyeng.tech/user/login/", {
        method: "POST",
        body: JSON.stringify({
          email: signIn.mail,
          password: signIn.password,
        }),
        headers: {
          "content-type": "application/json",
        },})
      .then((response) => { 
        if(response.ok !== true){
          throw new Error(response.statusText)
        }
        return response.json()})
      .then((response)=>{
        console.log(response);
        props.setIsToPass(true);
        props.setUser({
          mail: signIn.mail,
          password: signIn.password,
          password__double: signIn.password});
        setSignIn({...signIn, password:''});
        navigate('/')})
      .catch((error)=>{
        props.setIsToPass(false);
        setSignIn({...signIn,
        password:''});
        alert(error)})
      }
  }
  return(
    <StyledWrapper>
      <StyledContainer__Enter>
        <StyledModal__Block>
          <StyledModal__Form__Login onSubmit={handleSubmit} action="#">
            <NavLink to="/">
              <StyledModal__Logo>
                <img src="../img/logo_modal.png" alt="logo" />
              </StyledModal__Logo>
            </NavLink>
            <StyledModal__Input_Login onChange={(e)=>{setSignIn({
              ...signIn,
              mail: e.target.value});
            }}
              type="text"
              name="login"
              placeholder="Почта"
              value={signIn.mail}
            />
            <StyledModal__Input_Password onChange={(e)=>{setSignIn({
              ...signIn,
              password: e.target.value});
            }}
              type="password"
              name="password"
              placeholder="Пароль"
              value={signIn.password}
            />
            <StyledModal__Btn__Enter>
                Войти
            </StyledModal__Btn__Enter>
            <StyledModal__Btn__Signup>
              <StyledNavLink to="/signup">Зарегистрироваться</StyledNavLink>
            </StyledModal__Btn__Signup>
          </StyledModal__Form__Login>
        </StyledModal__Block>
      </StyledContainer__Enter>
    </StyledWrapper>
  )
}