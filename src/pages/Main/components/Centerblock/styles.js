import styled from "styled-components";
const StyledMain__Centerblock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    padding: 20px 40px 80px 111px;
`;
export const StyledMain__Centerblock_CenterBlock = styled(StyledMain__Centerblock)`
`;
const StyledCenterblock__Search = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 51px;
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
`;
export const StyledCenterblock__Search_Search = styled(StyledCenterblock__Search)`
`;
export const StyledSearch__Svg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    fill: transparent;
`;
export const StyledSearch__Text = styled.input`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme})=>theme.main_fonts};
    &::-webkit-input-placeholder {
        background-color: transparent;
        color: ${({theme})=>theme.main_fonts};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    &:-ms-input-placeholder {
        background-color: transparent;
        color: ${({theme})=>theme.main_fonts};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    &::-ms-input-placeholder {
        background-color: transparent;
        color: ${({theme})=>theme.main_fonts};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    &::placeholder {
        background-color: transparent;
        color: ${({theme})=>theme.main_fonts};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
`;
const Styled_Btn_Text = styled.div`
    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
      }
`;
const Styled_Btn_Text_Filter_Button= styled(Styled_Btn_Text)`
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid ${({theme})=>theme.main_fonts};
    border-radius: 60px;
    padding: 6px 20px;  
    &:not(:last-child) {
        margin-right: 10px;
      }
    ${({dropout})=>{
        if(dropout==='true'){ 
            return(`
                color: #ad61ff;
                border-color: #ad61ff;
                &:hover{
                    color: #ad61ff;
                    border-color: #ad61ff;
                }
                &:active{
                    color: #ad61ff;
                    border-color: #ad61ff;
                }`)}
        else{
            return``
        }
    }}
`;
export const Styled_Btn_Text_Filter_Button_Author = styled(Styled_Btn_Text_Filter_Button)`
    
`;
export const Styled_Btn_Text_Filter_Button_Year = styled(Styled_Btn_Text_Filter_Button)`
      
`;
export const Styled_Btn_Text_Filter_Button_Genre = styled(Styled_Btn_Text_Filter_Button)`
    
`;
export const StyledCenterblock__h2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;  
`;
export const StyledCenterblock__Filter = styled.div`
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
    margin-bottom: 51px;  
`;
export const StyledCenterblock__Content = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;
export const StyledFilter__Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;  
`;
const StyledContent__Title = styled.div`
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
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 24px; 
`;
export const StyledContent__Title_Playlist_Title = styled(StyledContent__Title)`   
`;
const StyledContent__Playlist = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;
export const StyledContent__Playlist_Playlist = styled(StyledContent__Playlist)``;
const StyledPlaylist_Title__Col = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;
export const StyledPlaylist_Title__Col__Col01 = styled(StyledPlaylist_Title__Col)`
    width: 447px;
`;
export const StyledPlaylist_Title__Col__Col02 = styled(StyledPlaylist_Title__Col)`
    width: 321px;
`;
export const StyledPlaylist_Title__Col__Col03 = styled(StyledPlaylist_Title__Col)`
    width: 245px;
`;
export const StyledPlaylist_Title__Col__Col04 = styled(StyledPlaylist_Title__Col)`
    width: 60px;
    text-align: end;
`;
export const StyledPlaylist_Title__Svg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969; 
`;

const StyledFilter__List__Wrapper = styled.div`
    position: absolute;
    background-color: ${({theme})=>theme.dpt_bg};
    min-width: 180px;
    height: 237px;
    top: 45px;
    left: 0;
    box-sizing: border-box;
    padding: 34px 24px 34px 34px;
    border-radius: 12px; 
`;
export const StyledFilter__List__Wrapper_Author__List = styled(StyledFilter__List__Wrapper)`
`;
export const StyledFilter__List__Wrapper_Year__List = styled(StyledFilter__List__Wrapper)`
`;
export const StyledFilter__List__Wrapper_Genre__List = styled(StyledFilter__List__Wrapper)`
`;


