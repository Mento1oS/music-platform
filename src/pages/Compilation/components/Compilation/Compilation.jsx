import { useParams } from 'react-router-dom';
import { StyledWrapper } from './styles';
export default function Compilation(){
    const params = useParams();
    return(
        <StyledWrapper>
            Подборка {params.id}
        </StyledWrapper>
    )
}