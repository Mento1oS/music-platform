import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledMain__Sidebar = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`;
export const StyledSidebar__Personal = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 12px 0 15px 0;
`;
export const StyledSidebar__Personal_Name = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme})=>theme.main_fonts};
    margin-right: 16px;
`;
export const StyledSidebar__Icon = styled.div`
    width: 43px;
    height: 43px;
    background-color: ${({theme})=>theme.main_bg};
    border-radius: 50%;
    cursor: pointer;
`
export const StyledStyled__Block = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;
export const StyledSidebar__List = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
export const StyledSidebar__Item = styled.div`
    width: 250px;
    height: 150px;
    &:not(:last-child) {
        margin-bottom: 30px;
      }
`;
export const StyledSidebar__Link = styled(NavLink)`
    width: 100%;
    height: 100%;  
`;
export const StyledSidebar__Img = styled.img`
    width: 100%;
    height: auto;
`;
export const StyledSkeleton = styled.div`
    height: 150px;
    width: 250px;
    background-color: rgb(49,49,49);
`
