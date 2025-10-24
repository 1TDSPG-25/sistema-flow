import { createContext, useState, type ReactNode } from "react";
import type { ThemeContextType } from "../types/themeContextType";

//Criamos o bilhete mágico
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Aqui criamos a pessoa que vai dar o bilhete para todo 
export const ThemeProvider = ({children}:{children : ReactNode })=>{

    //Guardar o estado da luz (se esta escuro ou não);
    const [isDark, setIsDark] = useState(false);

    //Função para mudar o estado da luz.
    const toggleTheme = ()=>{
        setIsDark((prevIsDark)=> !prevIsDark);
    }

    return(
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

};

export default ThemeContext;