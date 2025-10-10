import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-0">
          MegaFarma
        </h1>
        <Menu />
      </div>
    </header>
  );
}
