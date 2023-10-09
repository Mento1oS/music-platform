import styled from "styled-components";
export const StyledDropout__Wrapper = styled.div`
    &::-webkit-scrollbar {
    margin-left: 10px;
    height: 65px;
    width: 4px;
    }
    &::-webkit-scrollbar-track {
    background: #4B4949;
    border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 2px;
    }
    height: 169px;
    min-width: 112px;
    overflow-y: scroll;
`;
export const StyledDropout__Elements = styled.ul`
    color: ${({theme})=>theme.main_fonts};
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 2.5px 34px 2.5px 2.5px;
`;
export const StyledDropout__Elem = styled.li`
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    &:hover{
        text-decoration: underline;
        color: #ad61ff;
      }
`;