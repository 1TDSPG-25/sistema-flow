import { Link } from "react-router-dom";
import { MdDarkMode as DarkIcon } from "react-icons/md";
import { MdOutlineLightMode as LightIcon} from "react-icons/md";
import useTheme from "../../context/useTheme";

export default function Menu(){

  const{ isDark , toggleTheme} = useTheme();

  return(
    <nav className="menu flex flex-row gap-3 md:gap-6 items-center md:justify-center text-base md:text-lg">
      <div>
        <button onClick={toggleTheme} className="px-8 py-3 hover:text-blue-500">{isDark ? <LightIcon/> : <DarkIcon /> }</button>
      </div>
      <Link to="/" className="px-2 py-1 hover:text-blue-500 transition-colors"> Home</Link>
      <Link to="/produtos" className="px-2 py-1 hover:text-blue-500 transition-colors">Produtos</Link> 
      <Link to="/unidade" className="px-2 py-1 hover:text-blue-500 transition-colors">Unidade</Link> 
      <Link to="/faq" className="px-2 py-1 hover:text-blue-500 transition-colors">FAQ</Link>
      <Link to="/contato" className="px-2 py-1 hover:text-blue-500 transition-colors">Contato</Link>
      <Link to="/login" className="px-2 py-1 hover:text-blue-500 transition-colors">Login</Link>
    </nav>
  );
}