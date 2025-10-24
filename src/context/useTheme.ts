import { useContext } from "react"
import ThemeContext from "./ThemeContext"

export const useTheme = ()=>{
    //Aqui você pode implementar o hook useTheme
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error("useTheme deve ser usado dentro de um ThemeProvider.")
    }
}