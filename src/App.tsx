import { Suspense, lazy } from "react";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import useTheme from "./context/useTheme";
import Spinner from "./components/Spinner";
 
const Home = lazy(() => import("react-router-dom").then(module => ({ default:module.Outlet})) );
 
 
const Loading = () => {
  return <Spinner text="Carregando..." />;

};
 
export default function App(){

  const{isDark} = useTheme();

  return(
    <div className={`${isDark ? 'dark-mode' : 'light-mode'}`}>
      <Cabecalho />
      {/* Suspense para carregamento NÃO APAGAR e por rotas. Consulte Enrico ou Iago */}
      <Suspense fallback={<Loading />}>
        <Home/>
      </Suspense>
      <Rodape />
    </div>
  )
}
