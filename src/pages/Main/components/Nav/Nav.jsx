import { useState } from 'react';
import { StyledMain__Nav_Nav, StyledBurger__Line, 
  StyledLogo__Image, StyledMenu__Item,
  StyledMenu__Link, StyledMenu__List, 
  StyledNav__Burger_Burger, StyledNav__Logo_Logo, 
  StyledNav__Menu_Menu} from './styles';
import { useThemeContext } from '../../../../providers/ThemeProvider';
function Nav(props){
    const [isVisibleBurger, setIsVisibleBurger] = useState(true);
    const {toggleTheme, theme} =useThemeContext();
    return(
        <StyledMain__Nav_Nav theme={theme}>
            <StyledNav__Logo_Logo>
              {theme.name==='dark'?
                <StyledLogo__Image src="img/logo.png" alt="logo" />:
                <StyledLogo__Image src="img/logo_modal.png" alt="logo" />}
            </StyledNav__Logo_Logo>
            <StyledNav__Burger_Burger onClick={()=>setIsVisibleBurger(!isVisibleBurger)}>
              <StyledBurger__Line theme={theme}></StyledBurger__Line>
              <StyledBurger__Line theme={theme}></StyledBurger__Line>
              <StyledBurger__Line theme={theme}></StyledBurger__Line>
            </StyledNav__Burger_Burger>
            {isVisibleBurger ? (<StyledNav__Menu_Menu>
              <StyledMenu__List>
                <StyledMenu__Item>
                  <StyledMenu__Link theme={theme} to="/">Главное</StyledMenu__Link>
                </StyledMenu__Item>
                <StyledMenu__Item>
                  <StyledMenu__Link theme={theme} to="/myplaylist">Мой плейлист</StyledMenu__Link>
                </StyledMenu__Item>
                <StyledMenu__Item>
                  <StyledMenu__Link theme={theme} onClick={()=>{
                    props.setUser({
                      mail:'', 
                      password:'', 
                      password__double:''})
                    props.setIsToPass(false)}} to='/signin'>Войти</StyledMenu__Link>
                </StyledMenu__Item>
                <StyledMenu__Item onClick={toggleTheme}>
                  {theme.name==='dark'?
                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.2262 27.4088C14.6919 27.4088 11.0032 23.7201 11.0032 19.1857C11.0032 14.9315 14.1933 11.4138 18.4233 11.0031C18.6942 10.9762 18.95 11.1251 19.0617 11.3722C19.1739 11.6194 19.1167 11.9102 18.9192 12.0958C17.888 13.0666 17.3204 14.3762 17.3204 15.7841C17.3204 18.5803 19.5953 20.8553 22.3916 20.8553C23.9165 20.8553 25.3459 20.1775 26.3145 18.9969C26.4867 18.787 26.7737 18.7109 27.0263 18.8048C27.2804 18.8998 27.4455 19.1458 27.438 19.4167C27.3139 23.8981 23.7066 27.4088 19.2262 27.4088ZM16.8924 12.6295C14.1691 13.5873 12.2707 16.1677 12.2707 19.1857C12.2707 23.0213 15.3907 26.1413 19.2262 26.1413C22.4385 26.1413 25.1198 24.0071 25.926 21.0479C24.8932 21.7435 23.6688 22.1239 22.3916 22.1239C18.896 22.1239 16.0523 19.2807 16.0523 15.7846C16.0523 14.6557 16.3437 13.5776 16.8924 12.6295Z" fill="white"/>
                      <circle cx="19.5" cy="19.5" r="19" stroke="white"/>
                    </svg>: 
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.887 26.5137C16.4577 26.5137 13.668 23.7239 13.668 20.2947C13.668 16.8654 16.4577 14.0762 19.887 14.0762C23.3163 14.0762 26.106 16.866 26.106 20.2947C26.106 23.7239 23.3163 26.5137 19.887 26.5137ZM19.887 15.3197C17.1438 15.3197 14.912 17.5515 14.912 20.2947C14.912 23.0384 17.1438 25.2697 19.887 25.2697C22.6302 25.2697 24.862 23.0384 24.862 20.2947C24.862 17.552 22.6302 15.3197 19.887 15.3197Z" fill="black"/>
                      <path d="M19.8869 11.7103C19.5433 11.7103 19.2649 11.4313 19.2649 11.0883V8.49648C19.2649 8.15292 19.5433 7.875 19.8869 7.875C20.2299 7.875 20.5089 8.15292 20.5089 8.49648V11.0883C20.5089 11.4313 20.2299 11.7103 19.8869 11.7103Z" fill="black"/>
                      <path d="M26.0762 14.8717C25.9169 14.8717 25.7581 14.8109 25.6363 14.6896C25.3934 14.4472 25.3934 14.0533 25.6363 13.8103L27.8645 11.5822C28.1074 11.3398 28.5008 11.3398 28.7437 11.5822C28.9867 11.8252 28.9867 12.2191 28.7437 12.4615L26.5156 14.6896C26.3944 14.8109 26.2356 14.8717 26.0762 14.8717Z" fill="black"/>
                      <path d="M12.7066 14.8717C12.5473 14.8717 12.3879 14.8109 12.2667 14.6896L10.038 12.4615C9.79559 12.2191 9.79559 11.8252 10.038 11.5822C10.281 11.3398 10.6749 11.3398 10.9173 11.5822L13.146 13.8103C13.3884 14.0533 13.3884 14.4477 13.146 14.6896C13.0247 14.8109 12.8654 14.8717 12.7066 14.8717Z" fill="black"/>
                      <path d="M19.3913 32.621C19.0477 32.621 18.7693 32.3425 18.7693 31.999V29.4072C18.7693 29.0636 19.0477 28.7852 19.3913 28.7852C19.7343 28.7852 20.0128 29.0636 20.0128 29.4072V31.999C20.0128 32.3425 19.7343 32.621 19.3913 32.621Z" fill="black"/>
                      <path d="M10.9734 29.0963C10.8146 29.0963 10.6553 29.0354 10.534 28.9142C10.2911 28.6717 10.2911 28.2774 10.534 28.0344L12.7622 25.8063C13.0051 25.5633 13.3985 25.5633 13.6414 25.8063C13.8844 26.0487 13.8844 26.4426 13.6414 26.6855L11.4133 28.9142C11.2921 29.0354 11.1328 29.0963 10.9734 29.0963Z" fill="black"/>
                      <path d="M28.8005 29.0963C28.6416 29.0963 28.4823 29.0354 28.3605 28.9142L26.1324 26.6855C25.8895 26.4426 25.8895 26.0492 26.1324 25.8063C26.3754 25.5633 26.7687 25.5633 27.0117 25.8063L29.2398 28.0344C29.4828 28.2774 29.4828 28.6707 29.2398 28.9142C29.1186 29.0354 28.9598 29.0963 28.8005 29.0963Z" fill="black"/>
                      <path d="M10.4779 20.9169H7.67963C7.33607 20.9169 7.05762 20.6384 7.05762 20.2949C7.05762 19.9518 7.33607 19.6729 7.67963 19.6729H10.4779C10.8214 19.6729 11.0999 19.9513 11.0999 20.2949C11.0994 20.6384 10.8214 20.9169 10.4779 20.9169Z" fill="black"/>
                      <path d="M31.6214 20.9169H28.3044C27.9608 20.9169 27.6824 20.6384 27.6824 20.2949C27.6824 19.9518 27.9608 19.6729 28.3044 19.6729H31.6214C31.9644 19.6729 32.2434 19.9513 32.2434 20.2949C32.2434 20.6384 31.9644 20.9169 31.6214 20.9169Z" fill="black"/>
                      <circle cx="19.5576" cy="20.375" r="19" stroke="black"/>
                    </svg>
                  }
                </StyledMenu__Item>
              </StyledMenu__List>
            </StyledNav__Menu_Menu>): ''}
          </StyledMain__Nav_Nav>
    );
}
export default Nav;