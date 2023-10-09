import styled from "styled-components";
export const StyledContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.main_bg};
`;
export const StyledError = styled.div`
    margin-bottom: 100px;
    font-weight: 700;
    color: brown;
    font-size: 30px;
`
export const StyledText = styled.div`
    font-weight: 900;
    color: ${({theme})=>theme.main_fonts};
    font-size: 26px;
`