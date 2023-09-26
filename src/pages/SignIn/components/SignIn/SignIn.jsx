import { useState } from 'react';
import c from './SignIn.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
export default function SignIn(props){
  const [signIn, setSignIn] = useState({
    mail:'',
    password:''});
  const navigate = useNavigate();
    const redirect=()=>{
      if(signIn.password!=='' && signIn.mail!=='' && signIn.mail===props.user.mail && signIn.password===props.user.password){
        props.setIsToPass(true);
      }
      setSignIn({mail:'', password:''});
      navigate('/');
    }
  return(
    <div className={c.wrapper}>
      <div className={c.container__enter}>
        <div className={c.modal__block}>
          <form onSubmit={e=>{e.preventDefault()}} className={c.modal__form__login} action="#">
            <NavLink to="/">
              <div className={c.modal__logo}>
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </NavLink>
            <input onChange={(e)=>{setSignIn({
              ...signIn,
              mail: e.target.value});
            }}
              className={`${c.modal__input} ${c.login}`}
              type="text"
              name="login"
              placeholder="Почта"
              value={signIn.mail}
            />
            <input onChange={(e)=>{setSignIn({
              ...signIn,
              password: e.target.value});
            }}
              className={`${c.modal__input} ${c.password}`}
              type="password"
              name="password"
              placeholder="Пароль"
              value={signIn.password}
            />
            <button onClick={redirect} className={c.modal__btn__enter}>
                Войти
            </button>
            <button className={c.modal__btn__signup}>
              <NavLink className={c.signup__link} to="/signup">Зарегистрироваться</NavLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}