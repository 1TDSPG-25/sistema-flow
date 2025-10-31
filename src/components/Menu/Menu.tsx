import { NavLink } from "react-router-dom";
import { MdDarkMode as DarkIcon } from "react-icons/md";
import { MdOutlineLightMode as LightIcon } from "react-icons/md";
import { MdLogin } from "react-icons/md"; 
import useTheme from "../../context/useTheme";

export default function Menu() {
  const { isDark, toggleTheme } = useTheme();
  const activeClass = "text-blue-500 font-semibold";

  const isLoggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true";

  const avatar = (
    <img
      src="img/avatar.png"
      alt="Meu Perfil"
      className="w-8 h-8 rounded-full object-cover hover:scale-105 transition-transform"
    />
  );

  const loginIcon = (
    <MdLogin className="text-2xl hover:scale-110 transition-transform" />
  );

  const links = [
    { path: "/", label: "Home" },
    { path: "/produtos", label: "Produtos" },
    { path: "/unidade", label: "Unidade" },
    { path: "/faq", label: "FAQ" },
    { path: "/contato", label: "Contato" },
    isLoggedIn
      ? { path: "/perfil", label: avatar }
      : { path: "/login", label: loginIcon }, // 👈 Ícone no lugar do texto
  ];

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

      {links.map(({ path, label }, idx) => (
        <NavLink
          key={idx}
          to={path}
          className={({ isActive }) =>
            `px-2 py-1 transition-all duration-150 hover:px-3 ${
              isActive ? activeClass : ""
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
