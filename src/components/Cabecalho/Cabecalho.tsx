import useTheme from "@/context/useTheme";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { MdDarkMode  as DarkIcon} from "react-icons/md";
import { CiLight as LightIcon } from "react-icons/ci";


export default function Cabecalho() {

  const{isDark, toggleTheme} = useTheme();
  return (
    <header className={`${isDark ? 'dark-mode' : 'light-mode'}`}>

      <div>
        <button className="cursor-pointer" onClick={toggleTheme}>{isDark ? <DarkIcon/> : <LightIcon/>}</button>
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
