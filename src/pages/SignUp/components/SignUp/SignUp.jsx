import { NavLink } from 'react-router-dom';
import c from './SignUp.module.css';
export default function SignUp(props){
  return(
    <div className={c.wrapper}>
      <div className={c.container__signup}>
        <div className={c.modal__block}>
          <form onSubmit={(e)=>{e.preventDefault();}} className={c.modal__form__login}>
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
                (e.target.value===props.user.password__double&&e.target.value!==''&& props.user.mail!=='')?props.setIsToPass(true):props.setIsToPass(false)
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
                (e.target.value===props.user.password && e.target.value!=='' && props.user.mail!=='')?props.setIsToPass(true):props.setIsToPass(false)
                props.setUser({...props.user,
                password__double: e.target.value});
              }}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={props.user.password__double}
            />
            <button className={c.modal__btn__signup__ent}>
              {props.isToPass?<NavLink to='/'>Зарегистрироваться</NavLink>:
              <a onClick={(e)=>{
                e.preventDefault()
                props.setUser({...props.user,
                password:'',
                password__double:''})}}>Зарегистрироваться</a>}
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}