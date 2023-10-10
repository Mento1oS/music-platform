import { NavLink, useNavigate } from 'react-router-dom';
import { StyledWrapper, StyledContainer__Signup, 
 StyledModal__Block, StyledModal__Form__Login,
 StyledModal__Input_Login, StyledModal__Input_PassD, 
 StyledModal__Input_PassF, StyledModal__Logo,
 StyledModal__Signup__Ent} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsToPass, setUser } from '../../../../store/slices/userSlice';
export default function SignUp(props){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user= useSelector(state=>state.user.user);
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(user.password===user.password__double&&user.password!==''&& user.mail!==''){
      return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
        method: "POST",
        body: JSON.stringify({
          email: user.mail,
          password: user.password,
          username: user.mail,
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
        dispatch(setIsToPass(true));
        navigate('/')})
      .catch((error)=>{
        dispatch(setIsToPass(false));
        dispatch(setUser({...user,
        password:'',
        password__double:''}));
        alert(error)})
    }
    else{
      dispatch(setIsToPass(false));
      dispatch(setUser({...user,
      password:'',
      password__double:''}));
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
              onChange={(e)=>{dispatch(setUser({
                ...user,
                mail: e.target.value}));
              }}
              type="text"
              name="login"
              placeholder="Почта"
              value={user.mail}
            />
            <StyledModal__Input_PassF
              onChange={(e)=>{
                dispatch(setUser({...user,
                password: e.target.value}));
              }}
              type="password"
              name="password"
              placeholder="Пароль"
              value={user.password}
            />
            <StyledModal__Input_PassD
              onChange={(e)=>{
                dispatch(setUser({...user,
                password__double: e.target.value}));
              }}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={user.password__double}
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