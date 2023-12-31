import styled from "styled-components";
export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
export const StyledContainer__Signup = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
`;
export const StyledModal__Block = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px/2));
  top: calc(50% - (439px/2));
  opacity: 1;
`;
export const StyledModal__Form__Login = styled.form`
  width: 366px;
  height: 439px;
  background-color: #FFFFFF;
  border-radius: 12px;
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
  padding: 43px 44px 47px 40px;
  & input:first-child {
    margin-bottom: 30px;
  }
`;
export const StyledModal__Logo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
  & img {
    width: 140px;
    height: auto;
  }
`;
const StyledModal__Input = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #D0CECE;
  padding: 8px 1px;
  margin-right: 3px;
  margin-bottom: 30px;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
`;
export const StyledModal__Input_Login = styled(StyledModal__Input)`
`;
export const StyledModal__Input_PassF = styled(StyledModal__Input)`
`;
export const StyledModal__Input_PassD = styled(StyledModal__Input)`
`;
export const StyledModal__Signup__Ent = styled.button`
  width: 278px;
  height: 62px;
  background-color: #580EA2;
  border-radius: 6px;
  margin-left: 4px;
  border: none;
  margin-top: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  display: -webkit-box;
  display: -ms-flexbox;
  color: #FFFFFF;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  &:hover {
    background-color: #3F007D;
  }
  &:active {
    background-color: #271A58;
  }
`;


