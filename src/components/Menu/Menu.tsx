import { NavLink } from "react-router-dom";
import { MdDarkMode as DarkIcon } from "react-icons/md";
import { MdOutlineLightMode as LightIcon } from "react-icons/md";
import useTheme from "../../context/useTheme";

export default function Menu() {
  const { isDark, toggleTheme } = useTheme();
  const activeClass = "text-blue-500 font-semibold";
  
  const imagem = <img src="public/img/avatar.png" alt="Meu Perfil" className="w-8 h-8 rounded-full object-cover hover:scale-105 transition-transform" />;
  return (
    <nav className="menu flex flex-row gap-3 md:gap-6 items-center md:justify-center text-base md:text-lg">
      <div>
        <button
          onClick={toggleTheme}
          className="px-5 py-3 hover:text-blue-500 transition-colors"
        >
          {isDark ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>

      {["/", "/produtos", "/unidade", "/faq", "/contato", "/login", "/perfil"].map((path, idx) => {
        const names = ["Home", "Produtos", "Unidade", "FAQ", "Contato", "Login", imagem];
        return (
          <NavLink
            key={idx}
            to={path}
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-150 hover:px-3 ${
                isActive ? activeClass : ""
              }`
            }
          >
            {names[idx]}
          </NavLink>
        );
      })}
    </nav>
  );
}
