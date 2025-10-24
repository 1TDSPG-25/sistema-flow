import { Suspense, lazy } from "react";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import useTheme from "./context/usetheme";
 
const Home = lazy(() => import("react-router-dom").then(module => ({ default:module.Outlet})) );
 
  const { isDark } = useTheme();
 
  const Loading = () => {
    return <h2>Loading...</h2>;
  };
 
export default function App(){
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
