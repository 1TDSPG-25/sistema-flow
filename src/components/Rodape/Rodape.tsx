import useTheme from "../../context/useTheme";

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
        <div className="flex gap-6">
          <a href="/termos" className="hover:underline">
            Termos de Uso
          </a>
          <a href="/privacidade" className="hover:underline">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}