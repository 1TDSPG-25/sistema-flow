import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Spinner from "./components/Spinner/Spinner";
import useTheme from "./context/useTheme";

const Loading = () => {
  return <Spinner text="Carregando..." />;
};

export default function App() {
  const { isDark } = useTheme();

  return (
    <Suspense fallback={<Loading />}>
      <div className={`${isDark ? "dark-mode" : "light-mode"}`}>
        <Cabecalho />
        <Outlet />
        <Rodape />
      </div>
    </Suspense>
  );
}
