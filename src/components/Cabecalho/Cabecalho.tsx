
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { MdDarkMode as DarkIcon } from "react-icons/md";
import { MdOutlineLightMode as LightIcon} from "react-icons/md";
import useTheme from "../../context/useTheme";

export default function Cabecalho() {

  const{ isDark , toggleTheme} = useTheme();

  return (
    
    <header className={`${ isDark ? 'dark-mode':'light-mode'}`}>

      <div>
        <button onClick={toggleTheme} className="cursor-pointer">{isDark ? <LightIcon/> : <DarkIcon /> }</button>
      </div>

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