import { useDispatch, useSelector } from 'react-redux';
import { useThemeContext } from '../../../../providers/ThemeProvider';
import { StyledDropout__Wrapper, StyledDropout__Elem, StyledDropout__Elements } from './styles';
import { addFilter, removeFilter, setCurrentSorting } from '../../../../store/slices/playerSlice';
export default function Dropout(props){
    let nextId=0;
    const dispatch = useDispatch();
    const filters = useSelector(state=>state.player.filters);
    const {theme} = useThemeContext();
    const currentSorting = useSelector(state=>state.player.currentSorting);
    const mutateFiltersAndSorting=(e)=>{
        if(props.name === 'sort'){
            dispatch(setCurrentSorting(e.target.textContent.toString()));
            return;
        }
        if(filters[props.name].includes(e.target.textContent.toString())){
            dispatch(removeFilter({key:props.name, elem:e.target.textContent.toString()}));
        }
        else{
            dispatch(addFilter({key:props.name, elem:e.target.textContent.toString()}));
        }
    }
    return(
        <StyledDropout__Wrapper>
            <StyledDropout__Elements theme={theme}>
                {props.data.map(element => (<StyledDropout__Elem active={props.name==='sort'? (currentSorting===element).toString() :filters[props.name].includes(element).toString()} onClick={mutateFiltersAndSorting} key={nextId++}>{element}</StyledDropout__Elem>)) }
            </StyledDropout__Elements>
        </StyledDropout__Wrapper>
    )
}