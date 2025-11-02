// routes/Produtos/index.tsx (atualizado)
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import useTheme from "../../context/useTheme";
import type { TipoProduto } from "../../types/tipoProduto";
const API_URL = import.meta.env.VITE_API_URL_PRODUTOS;

export default function Produtos() {
  const theme = useTheme();
  const { isDark } = theme;

  const [produtos, setProdutos] = useState<TipoProduto[]>([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Erro ao carregar dados da API");
        }
        const produtosData: TipoProduto[] = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProdutos(produtosData);
      } catch (e) {
        console.error("Erro ao buscar produtos:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();
  }, []);

  const buscaTrim = busca.trim();
  const isBuscaNumero = buscaTrim !== "" && !isNaN(Number(buscaTrim));
  const buscaLower = buscaTrim.toLowerCase();
  const produtosFiltrados = produtos.filter((p, idx) => {
    if (buscaTrim === "") return true;
    if (isBuscaNumero) {
      if ((idx + 1).toString() === buscaTrim) return true;
    }
    return p.nome.toLowerCase().includes(buscaLower);
  });

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

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Spinner />
          </div>
        ) : produtosFiltrados.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto, idx) => (
              <li key={idx}>
                <Link to={`/produtos/${idx + 1}`}>
                  <div
                    className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${
                      isDark
                        ? "border-gray-700 bg-gray-700 hover:border-gray-600"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    {produto.imagem && (
                      <div className="w-full h-40 flex items-center justify-center rounded-md mb-3 overflow-hidden bg-white">
                        <img
                          src={produto.imagem}
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
                      R$ {produto.preco.toFixed(2)}
                    </p>
                    <p
                      className={`mt-2 transition-colors duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span className="font-medium">Fabricação:</span>{" "}
                      {new Date(produto.dataDeFabricacao).toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                    <p
                      className={`transition-colors duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span className="font-medium">Validade:</span>{" "}
                      {new Date(produto.dataDeValidade).toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                  </div>
                </Link>
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
