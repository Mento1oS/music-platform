import { useThemeContext } from '../../../../providers/ThemeProvider';
import { StyledDropout__Wrapper, StyledDropout__Elem, StyledDropout__Elements } from './styles';
export default function Dropout(props){
    let nextId=0;
    const {theme} = useThemeContext();
    return(
        <StyledDropout__Wrapper>
            <StyledDropout__Elements theme={theme}>
                {props.data.map(element => (<StyledDropout__Elem key={nextId++}>{element}</StyledDropout__Elem>)) }
            </StyledDropout__Elements>
        </StyledDropout__Wrapper>
    )
}