import styled from "styled-components";
export const StyledBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`;
const StyledPlayer__Btn = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    cursor: pointer;
    align-items: center;
`;
export const StyledPlayer__Btn_Play = styled(StyledPlayer__Btn)`
    margin-right: 23px;
`;
export const StyledVolume__Progress = styled.div`
    width: 109px;
    cursor: pointer;
`;
export const StyledVolume__Progress_Line = styled.input`
    width: 109px;
    cursor: pointer;
`;
const StyledPlayer__Btn_Prev = styled(StyledPlayer__Btn)`
    margin-right: 23px;
`;
export const StyledPlayer__Btn_Prev_Button__Icon = styled(StyledPlayer__Btn_Prev)`
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
      }
    &:active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
      }
`
const StyledPlayer__Btn_Next = styled(StyledPlayer__Btn)`
    margin-right: 28px;
    fill: #a53939;
`;
export const StyledPlayer__Btn_Next_Button__Icon = styled(StyledPlayer__Btn_Next)`
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
      }
    &:active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
      }
`;
const StyledPlayer__Btn_Repeat = styled(StyledPlayer__Btn)`
    margin-right: 24px;
`;
export const StyledPlayer__Btn_Repeat_Button__Icon = styled(StyledPlayer__Btn_Repeat)`
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
      }
    &:active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
      }
`;
const StyledPlayer__Btn_Shuffle = styled(StyledPlayer__Btn)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
export const StyledPlayer__Btn_Shuffle_Button__Icon = styled(StyledPlayer__Btn_Shuffle)`
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
      }
    &:active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
      }
`;
export const StyledTimer = styled.div`
    color: #696969;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 5%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`;
export const StyledBar__Content = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: ${({theme})=>theme.bar_bg};
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;
export const StyledBar__Player_Block = styled.div`
    height: 73px;
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
`;
const StyledBar__Player = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;    
`;
export const StyledBar__Player_Player = styled(StyledBar__Player)`
`;
const StyledBar__Volume_Block = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;   
`;
export const StyledBar__Volume_Block_Volume = styled(StyledBar__Volume_Block)`
`;
export const StyledPlayer__Controls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;    
`;
export const Styled__Btn_Prev_Svg = styled.svg`
    width: 15px;
    height: 14px;   
`;

export const Styled__Btn_Play_Svg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;   
`;
export const Styled__Btn_Next_Svg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;  
`;
const StyledDefault__Svg = styled.svg`
  height: 12px;
  fill: transparent;
`
export const Styled__Btn_Repeat_Svg = styled(StyledDefault__Svg)`
  ${({isloop})=>{
    if(isloop==='true'){
      return(
        `stroke: #ffffff;
         width: 18px;`
    )}
    else{
      return(
        `stroke: #696969;
         width: 18px;`
      )
    }
  }}
`;
export const Styled__Btn_Shuffle_Svg = styled(StyledDefault__Svg)`
  ${({isshuffle})=>{
    if(isshuffle==='true'){
      return(
        `stroke: #ffffff;
         width: 19px;`)}
    else{
      return(
        `stroke: #696969;
         width: 19px;`
      )
    }
  }}
`;
const StyledPlayer__Track_Play = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;
export const StyledPlayer__Track_Play_Track__Play = styled(StyledPlayer__Track_Play)`
`;
export const StyledTrack_Play__Contain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const StyledTrack_Play__Image = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;
export const StyledTrack_Play__Svg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const StyledTrack_Play__Author = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;
export const StyledTrack_Play__Author_Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme})=>theme.main_fonts};
  white-space: nowrap;
`;
export const StyledTrack_Play__Album = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;
export const StyledTrack_Play__Album_Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: ${({theme})=>theme.main_fonts};
`;
export const StyledTrack_Play__Like_Dis = styled.div`
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
  margin-left: 26%;
`;
const StyledTrack_Play__ = styled.div`
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    &:active svg {
        fill: #696969;
        stroke: #ffffff;
        cursor: pointer;
    }
    padding: 5px;
`;
export const StyledTrack_Play__Like = styled(StyledTrack_Play__)`
`;
export const StyledTrack_Play__Dislike = styled(StyledTrack_Play__)`
  margin-left: 28.5px;  
`;
export const StyledTrack_Play__Like_Svg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
export const StyledTrack_Play__Dislike_Svg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`;
export const StyledVolume__Content = styled.div`
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
  justify-content: end;  
`;
export const StyledVolume__Image = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
}`;
export const StyledVolume__Svg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;  
`;
export const StyledTrue__Player = styled.audio`
  display: hidden;  
`

