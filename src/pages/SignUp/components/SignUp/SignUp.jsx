import { NavLink, useNavigate } from 'react-router-dom';
import c from './SignUp.module.css';
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
    <div className={c.wrapper}>
      <div className={c.container__signup}>
        <div className={c.modal__block}>
          <form onSubmit={handleSubmit} className={c.modal__form__login}>
            <NavLink to="/">
              <div className={c.modal__logo}>
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </NavLink>
            <input 
              className={`${c.modal__input} ${c.login}`}
              onChange={(e)=>{props.setUser({...props.user,
                mail: e.target.value})}}
              type="text"
              name="login"
              placeholder="Почта"
              value={props.user.mail}
            />
            <input
              className={`${c.modal__input} ${c.password__first}`}
              onChange={(e)=>{
                props.setUser({...props.user,
                password: e.target.value});
              }}
              type="password"
              name="password"
              placeholder="Пароль"
              value={props.user.password}
            />
            <input
              className={`${c.modal__input} ${c.password__double}`}
              onChange={(e)=>{
                props.setUser({...props.user,
                password__double: e.target.value});
              }}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={props.user.password__double}
            />
            <button className={c.modal__btn__signup__ent}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}