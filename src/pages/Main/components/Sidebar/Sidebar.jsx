import { NavLink } from 'react-router-dom';
import { StyledMain__Sidebar, StyledSidebar__Icon,
  StyledSidebar__Img, StyledSidebar__Item,
  StyledSidebar__Link, StyledSidebar__List, 
  StyledSidebar__Personal, StyledSidebar__Personal_Name,
  StyledSkeleton, StyledStyled__Block } from './styles';
import { useThemeContext } from '../../../../providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setIsToPass, setUser } from '../../../../store/slices/userSlice';
import { setIsOnCategory } from '../../../../store/slices/playerSlice';
function Sidebar(props){
  const {theme} = useThemeContext();
  const isOnCategory = useSelector(state=>state.player.isOnCategory)
  const isSkeleton = useSelector(state=>state.theme.isSkeleton);
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.user);
  const setCategory =()=>{
    dispatch(setIsOnCategory(true));
  }
    return(
        <StyledMain__Sidebar>
            <StyledSidebar__Personal>
              <StyledSidebar__Personal_Name theme={theme}>{user.mail}</StyledSidebar__Personal_Name>
              <StyledSidebar__Icon theme={theme}>
                <NavLink onClick={()=>{
                  dispatch(setUser({
                    mail: '',
                    password: '',
                    password__double: ''}));
                  dispatch(setIsToPass(false));}} to='./signin'>
                {theme.name==='dark'?
                  <svg alt="logout">
                    <use xlinkHref={isOnCategory?"../img/icon/sprite.svg#logout":"img/icon/sprite.svg#logout"}></use>
                  </svg>:
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6711 16.046V14.7419C25.6711 13.2276 24.4435 12 22.9292 12H16.7419C15.2276 12 14 13.2276 14 14.7419V26.0645C14 27.5788 15.2276 28.8065 16.7419 28.8065H22.9292C24.4435 28.8065 25.6711 27.5788 25.6711 26.0645V24.6048M18.3572 20.3254H33.2963M33.2963 20.3254L30.1062 23.5155M33.2963 20.3254L30.1062 17.1353" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="20" cy="20" r="19.5" stroke="black"/>
                  </svg>
                  }
                </NavLink>
              </StyledSidebar__Icon>
            </StyledSidebar__Personal>
            <StyledStyled__Block>
              <StyledSidebar__List>
                <StyledSidebar__Item>
                  <StyledSidebar__Link to='category/1' onClick={setCategory}>
                    {isSkeleton?<StyledSkeleton></StyledSkeleton>:<StyledSidebar__Img
                      src={isOnCategory?"../img/playlist01.png":"img/playlist01.png"}
                      alt="day's playlist"
                    />}
                  </StyledSidebar__Link>
                </StyledSidebar__Item>
                <StyledSidebar__Item>
                  <StyledSidebar__Link to='/category/2' onClick={setCategory}>
                    {isSkeleton?<StyledSkeleton></StyledSkeleton>:<StyledSidebar__Img
                      src={isOnCategory?"../img/playlist02.png":"img/playlist02.png"}
                      alt="day's playlist"
                    />}
                  </StyledSidebar__Link>
                </StyledSidebar__Item>
                <StyledSidebar__Item>
                  <StyledSidebar__Link to='category/3' onClick={setCategory}>
                    {isSkeleton?<StyledSkeleton></StyledSkeleton>:<StyledSidebar__Img
                      src={isOnCategory?"../img/playlist03.png":"img/playlist03.png"}
                      alt="day's playlist"
                    />}
                  </StyledSidebar__Link>
                </StyledSidebar__Item>
              </StyledSidebar__List>
            </StyledStyled__Block>
          </StyledMain__Sidebar>
    );
}
export default Sidebar;