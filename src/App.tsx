import { Suspense, lazy } from "react";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Spinner from "./components/Spinner/Spinner";
import useTheme from "./context/useTheme";

const Home = lazy(() =>
  import("react-router-dom").then((module) => ({ default: module.Outlet }))
);

const Loading = () => {
  return <Spinner text="Carregando..." />;
};

export default function App() {
  const { isDark } = useTheme();

  return (
    <Suspense fallback={<Loading />}>
      <div className={`${isDark ? "dark-mode" : "light-mode"}`}>
        <Cabecalho />
        <Home />
        <Rodape />
      </div>
    </Suspense>
  );
}
