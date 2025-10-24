import { createContext, useState, type ReactNode } from "react";
import type { ThemeContextType } from "../types/themeContextTypes";

//Criamos o bilhete mágico
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Aqui criamos a pessoa que vai dar o bilhete mágico para todos
export const ThemeProvider = ({children} : {children : ReactNode}) => {
    
    //Guardar o estado da luz (se está escuro ou não)
    const [isDark, setIsDark] = useState(false);

    //Função para mudar o estado da luz
    const toggleTheme = () => {
        setIsDark((prevIsDark) => !prevIsDark);
    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}