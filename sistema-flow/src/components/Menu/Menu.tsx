import { Link } from "react-router-dom";


export default function Menu(){
  return(
    <nav className="menu flex flex-col md:flex-row gap-3 md:gap-6 items-center md:justify-center text-base md:text-lg">
      <Link to="/" className="px-2 py-1 hover:text-blue-500 transition-colors">
        Home
      </Link>
      <Link to="/Cadastro" className="px-2 py-1 hover:text-blue-500 transition-colors">
        Cadastro
      </Link>
    </nav>
  );
}