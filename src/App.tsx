import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

const Home = lazy(() => import("./routes/Home/index"));


const Loading = () => {
  return <h2>Loading...</h2>;
};

export default function App(){
  return(
    <div>
      <Cabecalho />
      {/* Suspense para carregamento NÃO APAGAR e por rotas. Consulte Enrico ou Iago */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
      <Rodape />
    </div>
  )
}
