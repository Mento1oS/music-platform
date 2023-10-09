import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledMain__Nav_Nav = styled.nav`
    width: 244px;
    background-color: ${({theme})=> theme.sec_bg};
    padding: 20px 0 20px 36px;     
`;
const StyledNav__Logo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`;
export const StyledNav__Logo_Logo = styled(StyledNav__Logo)`
`;
const StyledNav__Burger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;
export const StyledNav__Burger_Burger = styled(StyledNav__Burger)`
`;
const StyledNav__Menu = styled.div`
    display: block;
    visibility: visible;
`;
export const StyledNav__Menu_Menu = styled(StyledNav__Menu)`
`;
export const StyledLogo__Image = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`;
export const StyledBurger__Line = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${({theme})=> theme.main_fonts};
`;
export const StyledMenu__List = styled.ul`
    padding: 18px 0 10px 0;    
`;
export const StyledMenu__Item = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;
export const StyledMenu__Link = styled(NavLink)`
    color: ${({theme})=> theme.main_fonts};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
