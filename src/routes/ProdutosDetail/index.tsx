import { useParams, Link } from "react-router-dom";
// Importa o useState e useEffect
import { useState, useEffect } from "react";
// Importa o tipo do produto (vamos assumir que ele existe em /types)
import type { TipoProduto } from "../../types/tipoProduto"; 

export default function ProdutoDetail() {
  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<TipoProduto | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
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