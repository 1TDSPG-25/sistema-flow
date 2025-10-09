import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App(){
  return(
    <div className="container flex flex-col max-w-screen h-screen justify-between">
      <Cabecalho/>
        <Outlet/>
      <Rodape/>
    </div>
  )
}