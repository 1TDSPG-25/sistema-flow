import { Link } from "react-router-dom";

export default function Rodape(){
    return(
        <nav className="menu flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-base md:text-lg font-medium">
            <Link to="/" className="px-3 py-1 hover:text-blue-500 transition-colors duration-200">
                Home
            </Link>
            <Link to="/Cadastro" className="px-3 py-1 hover:text-blue-500 transition-colors duration-200">
                Cadastro
            </Link>
            <p>&copy; Todos os direitos reservados</p>
        </nav>
    );
}