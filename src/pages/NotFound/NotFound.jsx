import { useThemeContext } from '../../providers/ThemeProvider'
import {StyledContainer, StyledError, StyledText} from './styles'
export default function NotFoundPage(){
    const {theme} = useThemeContext();
    return(
        <StyledContainer theme={theme}>
            <StyledError>Error 404</StyledError>
            <StyledText>Page was not found</StyledText>
        </StyledContainer>
    )
}