import useTheme from "../../context/useTheme"; // usa o seu hook normalmente

export default function Rodape() {

  return (
    <>
      {/* favor, manter este rodapé fixo na parte inferior da página */}
      <footer
        className={`fixed bottom-0 left-0 w-full z-50
                   flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6
                   items-center justify-center text-sm sm:text-base md:text-lg
                   py-4 px-3 border-t backdrop-blur text-center sm:text-left
                   transition-colors duration-500
                   ${
                     isDark
                       ? "bg-gray-900 border-gray-700 text-gray-300"
                       : "bg-white/90 border-gray-200 text-gray-600"
                   }`}
      >
        <p className="px-2 py-1 hover:text-blue-500 transition-colors duration-300">
          &copy; Todos os direitos reservados - 2025.
        </p>
      </footer>
    </>
  );
}
