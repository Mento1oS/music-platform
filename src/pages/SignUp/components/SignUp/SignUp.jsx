import { NavLink, useNavigate } from 'react-router-dom';
import { StyledWrapper, StyledContainer__Signup, 
 StyledModal__Block, StyledModal__Form__Login,
 StyledModal__Input_Login, StyledModal__Input_PassD, 
 StyledModal__Input_PassF, StyledModal__Logo,
 StyledModal__Signup__Ent} from './styles';
export default function SignUp(props){
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(props.user.password===props.user.password__double&&props.user.password!==''&& props.user.mail!==''){
      return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
        method: "POST",
        body: JSON.stringify({
          email: props.user.mail,
          password: props.user.password,
          username: props.user.mail,
        }),
        headers: {
          "content-type": "application/json",
        }})
      .then((response) =>{ 
        if(response.ok !== true){
          throw new Error(response.statusText)
        }
        return response.json()})
      .then((response)=>{
        console.log(response);
        props.setIsToPass(true);
        navigate('/')})
      .catch((error)=>{
        props.setIsToPass(false);
        props.setUser({...props.user,
        password:'',
        password__double:''});
        alert(error)})
    }
    else{
      props.setIsToPass(false);
      props.setUser({...props.user,
      password:'',
      password__double:''});
    }
  }
  return(
    <StyledWrapper>
      <StyledContainer__Signup>
        <StyledModal__Block>
          <StyledModal__Form__Login onSubmit={handleSubmit}>
            <NavLink to="/">
              <StyledModal__Logo>
                <img src="../img/logo_modal.png" alt="logo" />
              </StyledModal__Logo>
            </NavLink>
            <StyledModal__Input_Login
              onChange={(e)=>{props.setUser({...props.user,
                mail: e.target.value})}}
              type="text"
              name="login"
              placeholder="Почта"
              value={props.user.mail}
            />
            <StyledModal__Input_PassF
              onChange={(e)=>{
                props.setUser({...props.user,
                password: e.target.value});
              }}
              type="password"
              name="password"
              placeholder="Пароль"
              value={props.user.password}
            />
            <StyledModal__Input_PassD
              onChange={(e)=>{
                props.setUser({...props.user,
                password__double: e.target.value});
              }}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={props.user.password__double}
            />
            <StyledModal__Signup__Ent>
              Зарегистрироваться
            </StyledModal__Signup__Ent>
          </StyledModal__Form__Login>
        </StyledModal__Block>
      </StyledContainer__Signup>
    </StyledWrapper>
    )
}