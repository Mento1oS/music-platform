import { NavLink } from 'react-router-dom';
import { StyledMain__Sidebar, StyledSidebar__Icon,
  StyledSidebar__Img, StyledSidebar__Item,
  StyledSidebar__Link, StyledSidebar__List, 
  StyledSidebar__Personal, StyledSidebar__Personal_Name,
  StyledSkeleton, StyledStyled__Block } from './styles';
function Sidebar(props){
    return(
        <StyledMain__Sidebar>
            <StyledSidebar__Personal>
              <StyledSidebar__Personal_Name>{props.user.mail}</StyledSidebar__Personal_Name>
              <StyledSidebar__Icon>
                <NavLink onClick={()=>{
                  props.setUser({
                    mail: '',
                    password: '',
                    password__double: ''});
                  props.setIsToPass(false);}} to='./signin'>
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
                </NavLink>
              </StyledSidebar__Icon>
            </StyledSidebar__Personal>
            <StyledStyled__Block>
              <StyledSidebar__List>
                <StyledSidebar__Item>
                  <StyledSidebar__Link to='compilation/1'>
                    {props.isSkeleton?<StyledSkeleton></StyledSkeleton>:<StyledSidebar__Img
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />}
                  </StyledSidebar__Link>
                </StyledSidebar__Item>
                <StyledSidebar__Item>
                  <StyledSidebar__Link to='/compilation/2'>
                    {props.isSkeleton?<StyledSkeleton></StyledSkeleton>:<StyledSidebar__Img
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />}
                  </StyledSidebar__Link>
                </StyledSidebar__Item>
                <StyledSidebar__Item>
                  <StyledSidebar__Link to='compilation/3'>
                    {props.isSkeleton?<StyledSkeleton></StyledSkeleton>:<StyledSidebar__Img
                      src="img/playlist03.png"
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