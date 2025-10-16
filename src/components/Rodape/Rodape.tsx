export default function Rodape() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50
                       flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6
                       items-center justify-center text-sm sm:text-base md:text-lg
                       py-4 px-3 border-t border-gray-200 bg-white/90 backdrop-blur
                       text-gray-600 text-center sm:text-left">
      <p className="px-2 py-1 hover:text-blue-500 transition-colors duration-300">
        &copy; Todos os direitos reservados - 2025.
      </p>
    </footer>
  );
}
