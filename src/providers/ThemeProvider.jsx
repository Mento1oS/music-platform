import { useContext } from "react";
import { createContext } from "react";

export const themes = {
    dark: {
        name: 'dark',
        main_fonts: `white`, 
        sec_fonts: `#4E4E4E`,
        main_bg: `#181818`,
        sec_bg: `#1C1C1C`,
        thd_bg: `#383838`,
        dpt_bg: `#313131`,
        bar_bg: `rgba(28, 28, 28, 0.5)`
    },
    light:{
        name: 'light',
        main_fonts: `black`, 
        sec_fonts: `#B1B1B1`, 
        main_bg: `white`,
        sec_bg: `#F6F5F3`,
        thd_bg: `white`,
        dpt_bg: `#F6F5F3`,
        bar_bg: `rgba(255, 255, 255, 0.5)`
    }};
export const ThemeContext = createContext({
    theme: themes.dark, 
    toggleTheme: ()=>{}
}); 

export const useThemeContext =()=>{
    const theme = useContext(ThemeContext);
    if(!theme) return theme.dark;
    return theme;
}