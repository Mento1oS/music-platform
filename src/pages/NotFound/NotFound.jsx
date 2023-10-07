import {StyledContainer, StyledError, StyledText} from './styles'
export default function NotFoundPage(){
    return(
        <StyledContainer>
            <StyledError>Error 404</StyledError>
            <StyledText>Page was not found</StyledText>
        </StyledContainer>
    )
}