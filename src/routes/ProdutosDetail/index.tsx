import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import type { TipoProduto } from "../../types/tipoProduto"; 
import useTheme from "../../context/useTheme";

const API_URL = import.meta.env.VITE_API_URL_PRODUTOS;

export default function ProdutoDetail() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<TipoProduto | null>(null);
  const [loading, setLoading] = useState(true);
  // Adiciona o estado de erro
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const { isDark } = theme;

  useEffect(() => {
    if (!id) {
      setLoading(false); 
      return;
    }
    const fetchProduto = async () => {
      setLoading(true); 
      setProduto(null);
      setError(null); 
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
        
          if (response.status === 404) {
            throw new Error("Produto não encontrado");
          }
          throw new Error("Falha ao buscar dados do produto");
        }
        const produtoData: TipoProduto = await response.json();
        setProduto(produtoData);
      } catch (error: unknown) {
        // Seta o estado de erro
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocorreu um erro desconhecido");
        }
        console.error("Erro ao carregar produto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduto();
  }, [id]); 

  if (loading) {
    return (
      <main className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4">Carregando produto...</p>
        </div>
      </main>
    );
  }


  if (error) {
    return (
      <main className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Falha ao Carregar</h2>
          <p className="mb-4">{error}</p>
          <Link 
            to="/produtos" 
            className={`px-4 py-2 rounded-md transition-colors ${
              isDark ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"
            } text-white`}
          >
            Voltar para produtos
          </Link>
        </div>
      </main>
    );
  }
  

  if (!produto) {
    return (
      <main className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Link 
            to="/produtos" 
          	className={`px-4 py-2 rounded-md transition-colors ${
section-end: _990664
              isDark ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"
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
section-end: _1766a5
            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-800"
          }`}
        >
          ← Voltar para produtos
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
            	  src={produto.avatar}
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
  	<p className={`text-sm transition-colors duration-500 ${
  	  isDark ? "text-gray-400" : "text-gray-500"
section-end: _952b1b
  	}`}>\
  	  Em estoque • Pronta entrega
  	</p>
  	  </div>

  	  <div className="space-y-4 mb-8">
  	<div>
  	  <h3 className={`font-semibold mb-2 transition-colors duration-500 ${
  	isDark ? "text-gray-200" : "text-gray-700"
  	  }`}>
  	Informações do Produto
  	  </h3>
  	  <div className="space-y-2">
  	<p className={`transition-colors duration-500 ${
  	  isDark ? "text-gray-300" : "text-gray-600"
  	}`}>
  	  <span className="font-medium">Fabricação:</span>{" "}
  	  {new Date(produto.dataFabricacao).toLocaleDateString("pt-BR")}
  	</p>
  	<p className={`transition-colors duration-500 ${
  	  isDark ? "text-gray-300" : "text-gray-600"
section-end: _3c8e40
  	}`}>
  	  <span className="font-medium">Validade:</span>{" "}
  	  {new Date(produto.dataValidade).toLocaleDateString("pt-BR")}
  	</p>
  	  </div>
  	</div>
  	  </div>
  	  
  	  <button
  	className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
section-end: _599a2c
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