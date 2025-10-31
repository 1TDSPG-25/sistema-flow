import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import type { TipoProduto } from "../../types/tipoProduto"; 

const API_URL = import.meta.env.VITE_API_URL_PRODUTOS;

export default function ProdutoDetail() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<TipoProduto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduto = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          throw new Error("Produto não encontrado");
        }
        const produtoData: TipoProduto = await response.json();
        setProduto(produtoData);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduto();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4">Carregando produto...</p>
        </div>
      </main>
    );
  }

 
  if (!produto) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Link 
            to="/produtos" 
            className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            Voltar para produtos
          </Link>
        </div>
      </main>
    );
  }

 
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Link to="/produtos" className="inline-flex items-center mb-6">
          ← Voltar para produtos
        </Link>

        <div className="p-8 rounded-xl shadow-md max-w-4xl mx-auto bg-white">
         
          <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>
        
          <div className="mb-6">
            <p className="text-4xl font-bold text-indigo-600 mb-2">
             
              R$ {produto.preco.toFixed(2)}
            </p>
          </div>

          
        </div>
      </div>
    </main>
  );
}