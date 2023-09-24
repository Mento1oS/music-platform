import { useState } from 'react';
import c from './SignIn.module.css';
import { NavLink } from 'react-router-dom';
export default function SignIn(props){
  const [signIn, setSignIn] = useState({
    mail:'',
    password:''});
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
              (signIn.password!=='' && e.target.value!=='' && e.target.value===props.user.mail && signIn.password===props.user.password)?props.setIsToPass(true): props.setIsToPass(false);
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
              (signIn.mail!=='' && e.target.value!=='' && e.target.value===props.user.password && signIn.mail===props.user.mail)?props.setIsToPass(true): props.setIsToPass(false);
            }}
              className={`${c.modal__input} ${c.password}`}
              type="password"
              name="password"
              placeholder="Пароль"
              value={signIn.password}
            />
            <button className={c.modal__btn__enter}>
              {props.isToPass? 
                <NavLink to="/">Войти</NavLink> :
                <a onClick={(e)=>{
                  e.preventDefault();
                  setSignIn({
                    ...signIn,
                    password: ''
                  });}}>
                    Войти
                </a>}
            </button>
            <button className={c.modal__btn__signup}>
              <NavLink to="/signup">Зарегистрироваться</NavLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}