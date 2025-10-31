import useTheme from "../../context/useTheme";

export default function Rodape() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Rodapé"
      className={`w-full border-t backdrop-blur py-4 px-3 transition-colors duration-500 mt-10
        ${isDark ? "bg-gray-900/90 border-gray-700 text-gray-300" : "bg-white/90 border-gray-200 text-gray-600"}`}
    >
      <div className="mx-auto max-w-7xl flex justify-center">
        <p className="px-2 py-1 text-center">
          © {year} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
