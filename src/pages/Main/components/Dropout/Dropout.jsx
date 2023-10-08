import { StyledDropout__Wrapper, StyledDropout__Elem, StyledDropout__Elements } from './styles';
export default function Dropout(props){
    let nextId=0;
    return(
        <StyledDropout__Wrapper>
            <StyledDropout__Elements>
                {props.data.map(element => (<StyledDropout__Elem key={nextId++}>{element}</StyledDropout__Elem>)) }
            </StyledDropout__Elements>
        </StyledDropout__Wrapper>
    )
}