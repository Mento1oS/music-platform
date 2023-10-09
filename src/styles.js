import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: ${({theme})=>theme.thd_bg};
`;
export const Wrapper = ({children, theme})=>{
    return(
        <StyledWrapper theme={theme}>
            {children}
        </StyledWrapper>)
}

const StyledContainer = styled.div`
    max-width: 1920px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: ${({theme})=>theme.main_bg};
`;
export const Container = ({children, theme})=>{
    return(
        <StyledContainer theme={theme}>
            {children}
        </StyledContainer>)
}

  