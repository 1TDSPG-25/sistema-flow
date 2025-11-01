import useTheme from "../../context/useTheme";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Rodape() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  const footerClasses = `
    w-full border-t backdrop-blur py-4 px-3 transition-colors duration-500 mt-10
    ${isDark
      ? "bg-gray-900/90 border-gray-700 text-gray-300"
      : "bg-white/90 border-gray-200 text-gray-600"
    }
  `;

  return (
    <footer
      role="contentinfo"
      aria-label="Rodapé"
      className={footerClasses}
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="px-2 py-1 text-center sm:text-left">
          © {year} Todos os direitos reservados.
        </p>
        
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li>
                <a href="/termos" className="hover:underline">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/privacidade" className="hover:underline">
                  Privacidade
                </a>
              </li>
            </ul>
          </nav>
          
          <ul className="flex items-center justify-center gap-5">
            <li>
              <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-gray-500">
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-gray-500">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-gray-500">
                <FaTwitter size={20} />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}