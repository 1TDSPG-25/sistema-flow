import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="w-full flex flex-col md:flex-row items-center justify-between
                      px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-0">
          <Link to="/">
            MegaFarma
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
}
