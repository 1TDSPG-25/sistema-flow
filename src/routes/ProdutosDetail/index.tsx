import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTheme from "../../context/useTheme";
import type { TipoProduto } from "../../types/tipoProduto";
import { IoIosArrowRoundBack } from "react-icons/io";

const API_URL = import.meta.env.VITE_API_URL_PRODUTOS;

export default function ProdutoDetail() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<TipoProduto | null>(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const { isDark } = theme;

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`${API_URL}`); // API now returns all products
        if (!response.ok) throw new Error("Produto não encontrado");
        const produtosData: TipoProduto[] = await response.json();
        // Find by index since no id
        const idx = Number(id) - 1;
        setProduto(produtosData[idx] || null);
      } catch {
        setProduto(null);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduto();
  }, [id]);

  if (loading) {
    return (
      <main
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4">Carregando produto...</p>
        </div>
      </main>
    );
  }

  if (!produto) {
    return (
      <main
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
        }`}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Link
            to="/produtos"
            className={`px-4 py-2 rounded-md transition-colors ${
              isDark
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-indigo-500 hover:bg-indigo-600"
            } text-white`}
          >
            Voltar para produtos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`transition-colors duration-500 min-h-screen ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/produtos"
          className={`inline-flex items-center mb-6 transition-colors duration-500 ${
            isDark
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <IoIosArrowRoundBack className="mr-2" size={32} /> Voltar para produtos
        </Link>

        <div
          className={`p-8 rounded-xl shadow-md max-w-4xl mx-auto transition-colors duration-500 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <div className="w-full h-80 flex items-center justify-center rounded-lg overflow-hidden bg-white p-4">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              <h1
                className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}
              >
                {produto.nome}
              </h1>

              <div className="mb-6">
                <p className="text-4xl font-bold text-indigo-600 mb-2">
                  R$ {produto.preco.toFixed(2)}
                </p>
                <p
                  className={`text-sm transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Em estoque • Pronta entrega
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h3
                    className={`font-semibold mb-2 transition-colors duration-500 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Informações do Produto
                  </h3>
                  <div className="space-y-2">
                    <p
                      className={`transition-colors duration-500 ${
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
                </div>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  isDark
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-indigo-500 hover:bg-indigo-600 text-white"
                }`}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
