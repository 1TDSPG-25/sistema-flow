import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import useTheme from "../../context/useTheme"; // usa seu hook

const API_URL = import.meta.env.VITE_API_URL_PRODUTOS;

export default function Produtos() {
  const theme = useTheme();
  const { isDark } = theme;

  const [produtos, setProdutos] = useState<TipoProduto[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Erro ao carregar dados locais");
        }

        const produtosData: TipoProduto[] = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 500)); // simula delay
        setProdutos(produtosData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          alert("Erro ao carregar dados locais: " + error.message);
        } else {
          alert("Erro ao carregar dados locais");
        }
      }
    };

    fetchProdutos();
  }, []);

  const produtosFiltrados = produtos.filter((p) =>
    busca === ""
      ? true
      : p.nome.toLowerCase().startsWith(busca.toLowerCase())
  );

  return (
    <main
      className={`transition-colors duration-500 min-h-screen ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`p-8 rounded-xl shadow-md w-full max-w-7xl mx-auto transition-colors duration-500 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 text-center transition-colors duration-500 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Lista de Produtos
        </h2>

        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Buscar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className={`w-full md:w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-indigo-500 transition-colors duration-500 ${
              isDark
                ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400 focus:ring-indigo-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-indigo-500"
            }`}
          />
        </div>

        {produtosFiltrados.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
              <li
                key={produto.id}
                className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  isDark ? "border-gray-700 bg-gray-700" : "border-gray-200 bg-white"
                }`}
              >
                {produto.avatar && (
                  <div className="w-full h-40 flex items-center justify-center rounded-md mb-3 overflow-hidden bg-white">
                    <img
                      src={produto.avatar}
                      alt={produto.nome}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <h3
                  className={`text-lg font-semibold transition-colors duration-500 ${
                    isDark ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {produto.nome}
                </h3>
                <p className="text-indigo-600 font-medium mt-2">
                  💰 R$ {produto.preco.toFixed(2)}
                </p>
                <p
                  className={`mt-2 transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="font-medium">Fabricação:</span>{" "}
                  {new Date(produto.dataFabricacao).toLocaleDateString(
                    "pt-BR"
                  )}
                </p>
                <p
                  className={`transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="font-medium">Validade:</span>{" "}
                  {new Date(produto.dataValidade).toLocaleDateString("pt-BR")}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p
            className={`text-center mt-4 transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Nenhum produto encontrado.
          </p>
        )}
      </div>
    </main>
  );
}
