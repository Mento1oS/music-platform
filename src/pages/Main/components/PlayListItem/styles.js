import styled from "styled-components";
export const StyledPlaylist__Item = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`;
const StyledPlaylist__Track = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
export const StyledPlaylist__Track_Track = styled(StyledPlaylist__Track)`

`
export const StyledTrack__Title = styled.div`
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
    width: 447px;
`;
export const StyledTrack__Title_Image = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 17px;
    &:hover{
        cursor: pointer;
      }
`;
export const StyledTrack__Title_Svg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;  
`;
export const StyledTrack__Title_Link = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.main_fonts};
`;
export const StyledTrack__Title_Span = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.sec_fonts};
`;
export const StyledTrack__Author = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;
export const StyledTrack__Author_Link = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.main_fonts};
    text-align: left;
`;
export const StyledTrack__Album = styled.div`
    width: 245px;
`;
export const StyledTrack__Album_Link = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`;
export const StyledTrack__Time_Svg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;  
`;
export const StyledTrack__Time_Text = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;
export const StyledColumn1=styled.div`
    text-align: left;
    height: 19px;
    width: 75%;
    background-color: rgb(49,49,49);  
`;
export const StyledColumn2=styled.div`
    text-align: left;
    height: 19px;
    width: 90%;
    margin-left: -5%;
    background-color: rgb(49,49,49);
`;
export const StyledColumn3=styled.div`
    text-align: left;
    width: 30%;
    background-color: rgb(49,49,49);
    height: 19px;
`;




