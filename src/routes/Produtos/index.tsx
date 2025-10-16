import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { TipoProduto } from "../../types/tipoProduto";

import produtosData from "../../data/produtos.json";

export default function Produtos() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // pequeno delay
        setProdutos(produtosData);
      } catch (error) {
        alert("Erro ao carregar dados locais: " + error);
      }
    };

    fetchProdutos();
  }, []);

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Lista de Produtos
        </h2>

        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Buscar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Link
            to="/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            Voltar
          </Link>
        </div>

        {produtosFiltrados.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <li
                key={produto.id}
                className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {produto.avatar && (
                  <img
                    src={produto.avatar}
                    alt={produto.nome}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                <h3 className="text-lg font-semibold text-gray-800">
                  {produto.nome}
                </h3>
                <p className="text-indigo-600 font-medium mt-2">
                  💰 R$ {produto.preco.toFixed(2)}
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Fabricação:</span>{" "}
                  {new Date(produto.dataFabricacao).toLocaleDateString("pt-BR")}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Validade:</span>{" "}
                  {new Date(produto.dataValidade).toLocaleDateString("pt-BR")}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center mt-4">
            Nenhum produto encontrado.
          </p>
        )}
      </div>
    </main>
  );
}
