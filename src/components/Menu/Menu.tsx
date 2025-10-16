import { Link } from "react-router-dom";

export default function Menu(){
  return(
    <nav className="menu flex flex-row gap-3 md:gap-6 items-center md:justify-center text-base md:text-lg">
      <Link to="/" className="px-2 py-1 hover:text-blue-500 transition-colors"> Home</Link>
      <Link to="/login" className="px-2 py-1 hover:text-blue-500 transition-colors">Login</Link>
      <Link to="/Faq" className="px-2 py-1 hover:text-blue-500 transition-colors">FAQ</Link>
      <Link to="/Contato" className="px-2 py-1 hover:text-blue-500 transition-colors">Contato</Link>
      <Link to="/Unidade" className="px-2 py-1 hover:text-blue-500 transition-colors">Unidade</Link> 
      <Link to="/produtos" className="px-2 py-1 hover:text-blue-500 transition-colors">Produtos</Link> 
    </nav>
  );
}