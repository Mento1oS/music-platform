import { useState } from 'react';
import { StyledMain__Nav_Nav, StyledBurger__Line, 
  StyledLogo__Image, StyledMenu__Item,
  StyledMenu__Link, StyledMenu__List, 
  StyledNav__Burger_Burger, StyledNav__Logo_Logo, 
  StyledNav__Menu_Menu} from './styles';
import { useThemeContext } from '../../../../providers/ThemeProvider';
function Nav(props){
    const [isVisibleBurger, setIsVisibleBurger] = useState(true);
    const {toggleTheme} =useThemeContext();
    return(
        <StyledMain__Nav_Nav>
            <StyledNav__Logo_Logo>
              <StyledLogo__Image src="img/logo.png" alt="logo" />
            </StyledNav__Logo_Logo>
            <StyledNav__Burger_Burger onClick={()=>setIsVisibleBurger(!isVisibleBurger)}>
              <StyledBurger__Line></StyledBurger__Line>
              <StyledBurger__Line></StyledBurger__Line>
              <StyledBurger__Line></StyledBurger__Line>
            </StyledNav__Burger_Burger>
            {isVisibleBurger ? (<StyledNav__Menu_Menu>
              <StyledMenu__List>
                <StyledMenu__Item>
                  <StyledMenu__Link to="/">Главное</StyledMenu__Link>
                </StyledMenu__Item>
                <StyledMenu__Item>
                  <StyledMenu__Link to="/myplaylist">Мой плейлист</StyledMenu__Link>
                </StyledMenu__Item>
                <StyledMenu__Item>
                  <StyledMenu__Link onClick={()=>{
                    props.setUser({
                      mail:'', 
                      password:'', 
                      password__double:''})
                    props.setIsToPass(false)}} to='/signin'>Войти</StyledMenu__Link>
                </StyledMenu__Item>
                <StyledMenu__Item onClick={toggleTheme}>Поменять тему</StyledMenu__Item>
              </StyledMenu__List>
            </StyledNav__Menu_Menu>): ''}
          </StyledMain__Nav_Nav>
    );
}
export default Nav;