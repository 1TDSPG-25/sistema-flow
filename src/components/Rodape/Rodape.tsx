import useTheme from "../../context/useTheme";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLink = ({ href, label, icon: Icon }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 transition-colors hover:text-gray-500 dark:hover:text-gray-300"
    >
      <Icon size={20} />
    </a>
  </li>
);

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
                <span className="hover:underline">
                  Termos de Uso
                </span>
              </li>
              <li>
                <span className="hover:underline">
                  Privacidade
                </span>
              </li>
            </ul>
          </nav>
          
          <ul className="flex items-center justify-center gap-5">
            <SocialLink href="https://github.com/1TDSPG-25/sistema-flow" label="Visitar Github" icon={FaGithub} />
            <SocialLink href="https://linkedin.com" label="Visitar LinkedIn" icon={FaLinkedin} />
            <SocialLink href="https://twitter.com" label="Visitar Twitter" icon={FaTwitter} />
          </ul>
        </div>

      </div>
    </footer>
  );
}