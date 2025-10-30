import { NavLink } from "react-router-dom";
import { MdDarkMode as DarkIcon } from "react-icons/md";
import { MdOutlineLightMode as LightIcon } from "react-icons/md";
import useTheme from "../../context/useTheme";

export default function Menu() {
  const { isDark, toggleTheme } = useTheme();

  const activeClass = "text-blue-500 font-semibold";

  return (
    <nav className="menu flex flex-row gap-3 md:gap-6 items-center md:justify-center text-base md:text-lg">
      <div>
        <button onClick={toggleTheme} className="px-8 py-3 hover:text-blue-500">
          {isDark ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>

      <NavLink 
        to="/" 
        className={({ isActive }) => `px-2 py-1 transition-colors ${isActive ? activeClass : ""}`}
      >
        Home
      </NavLink>
      <NavLink 
        to="/produtos" 
        className={({ isActive }) => `px-2 py-1 transition-colors ${isActive ? activeClass : ""}`}
      >
        Produtos
      </NavLink>
      <NavLink 
        to="/unidade" 
        className={({ isActive }) => `px-2 py-1 transition-colors ${isActive ? activeClass : ""}`}
      >
        Unidade
      </NavLink>
      <NavLink 
        to="/faq" 
        className={({ isActive }) => `px-2 py-1 transition-colors ${isActive ? activeClass : ""}`}
      >
        FAQ
      </NavLink>
      <NavLink 
        to="/contato" 
        className={({ isActive }) => `px-2 py-1 transition-colors ${isActive ? activeClass : ""}`}
      >
        Contato
      </NavLink>
      <NavLink 
        to="/login" 
        className={({ isActive }) => `px-2 py-1 transition-colors ${isActive ? activeClass : ""}`}
      >
        Login
      </NavLink>
    </nav>
  );
}
