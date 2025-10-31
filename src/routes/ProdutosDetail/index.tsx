import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import type { TipoProduto } from "../../types/tipoProduto"; 

const API_URL = import.meta.env.VITE_API_URL_PRODUTOS;

export default function ProdutoDetail() {
  const { id } = useParams<{ id: string }>();
  const [_produto, setProduto] = useState<TipoProduto | null>(null);
  const [_loading, setLoading] = useState(true);
  void _produto;
  void _loading;

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

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Link to="/produtos" className="inline-flex items-center mb-6">
          ← Voltar para produtos
        </Link>

        <div className="p-8 rounded-xl shadow-md max-w-4xl mx-auto bg-white">
          <h1 className="text-3xl font-bold mb-4">Página de Detalhe do Produto</h1>
          
          <p>Carregando dados para o produto com ID: <strong>{id}</strong></p>
        </div>
      </div>
    </main>
  );
}