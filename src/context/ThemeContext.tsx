import { createContext, useState, type ReactNode } from "react";
import type { ThemeContextType } from "../types/themeContext";

//Criamos o bilhete mágico
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Aqui criamos a pessoa que vai dar o bilhete para todo
export const ThemeProvider = ({children} : {children : ReactNode})=>{

    //Guardar o estado da luz (se está escuro ou não)
    const [isDark, setisDark] = useState(false);

    //Função para mudar o estado da luz
    const toggleTheme = ()=>{
        setisDark((prevIsDark)=> !prevIsDark);
    }

    return(
        <ThemeContext.Provider value={{isDark, toogleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
};