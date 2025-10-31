import React, { useState, useEffect } from "react";
import axios from "axios";

// 💊 Tipo do produto
export type Produto = {
  id?: number;
  nome: string;
  dataFabricacao: string;
  validade: string;
  valor: number;
};

// 🌐 URL da API
const API_URL = import.meta.env.VITE_API_URL_PRODUTOS || "http://localhost:3001/produtos";

export default function AdminProdutos() {
  // =========================
  // ⚡ Estados principais
  // =========================
  const [produtos, setProdutos] = useState<Produto[]>([]); // lista de produtos
  const [loading, setLoading] = useState<boolean>(true); // carregamento da lista
  const [saving, setSaving] = useState<boolean>(false); // status de salvamento
  const [showForm, setShowForm] = useState<boolean>(false); // exibir modal do formulário
  const [editing, setEditing] = useState<Produto | null>(null); // produto que está sendo editado

  // =========================
  // ⚡ Estados do formulário
  // =========================
  const [formNome, setFormNome] = useState<string>(""); // nome do remédio
  const [formDataFabricacao, setFormDataFabricacao] = useState<string>(""); // data fabricação
  const [formValidade, setFormValidade] = useState<string>(""); // validade
  const [formValor, setFormValor] = useState<number>(0); // valor do produto

  // =========================
  // ⚡ Estados de feedback
  // =========================
  const [message, setMessage] = useState<string | null>(null); // mensagem de sucesso
  const [error, setError] = useState<string | null>(null); // mensagem de erro

  // =========================
  // ⚡ Buscar produtos ao carregar
  // =========================
  useEffect(() => {
    buscarProdutos();
  }, []);

  // =========================
  // ⚡ Funções CRUD
  // =========================

  // 🔹 Buscar produtos (GET)
  async function buscarProdutos(): Promise<void> {
    try {
      setLoading(true);
      const res = await axios.get<Produto[]>(API_URL);
      setProdutos(res.data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
      setError("Falha ao carregar produtos.");
    } finally {
      setLoading(false);
    }
  }

  // 🔹 Salvar produto (POST ou PUT)
  async function salvarProduto(): Promise<void> {
    // ⛔ Validações
    if (!formNome.trim()) {
      setError("O nome do remédio é obrigatório.");
      return;
    }
    if (!formDataFabricacao || !formValidade) {
      setError("Informe as datas de fabricação e validade.");
      return;
    }
    if (formValor <= 0) {
      setError("O valor deve ser maior que zero.");
      return;
    }

    setSaving(true);
    const novoProduto: Produto = {
      nome: formNome,
      dataFabricacao: formDataFabricacao,
      validade: formValidade,
      valor: formValor,
    };

    try {
      if (editing) {
        await axios.put(`${API_URL}/${editing.id}`, novoProduto);
        setMessage("Produto atualizado com sucesso!");
      } else {
        await axios.post(API_URL, novoProduto);
        setMessage("Produto adicionado com sucesso!");
      }
      setShowForm(false);
      await buscarProdutos();
    } catch (err) {
      console.error("Erro ao salvar produto:", err);
      setError("Falha ao salvar o produto.");
    } finally {
      setSaving(false);
    }
  }

  async function removerProduto(id?: number): Promise<void> {
    if (!id) return;
    if (!confirm("Deseja realmente excluir este produto?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessage("Produto removido com sucesso!");
      await buscarProdutos();
    } catch (err) {
      console.error("Erro ao remover produto:", err);
      setError("Falha ao remover o produto.");
    }
  }

  function abrirNovo(): void {
    setEditing(null);
    setFormNome("");
    setFormDataFabricacao("");
    setFormValidade("");
    setFormValor(0);
    setShowForm(true);
  }

  // 🔹 Abrir formulário para editar produto
  function abrirEditar(p: Produto): void {
    setEditing(p);
    setFormNome(p.nome);
    setFormDataFabricacao(p.dataFabricacao);
    setFormValidade(p.validade);
    setFormValor(p.valor);
    setShowForm(true);
  }

   return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Cabeçalho */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Painel de Produtos</h1>
          <p className="text-sm text-gray-500">Gerencie os remédios cadastrados no sistema.</p>
        </div>
        <button
          onClick={abrirNovo}
          className="bg-sky-600 text-white px-4 py-2 rounded-md shadow-sm hover:brightness-105"
        >
          + Novo produto
        </button>
      </header>

      {/* Mensagens */}
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      {message && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{message}</div>}

      {/* Tabela de produtos */}
      <main>
        {loading ? (
          <p className="text-center text-gray-500 py-8">Carregando produtos...</p>
        ) : produtos.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Nenhum produto encontrado.</p>
        ) : (
          <div className="bg-white shadow-sm rounded-md overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-600">
                <tr>
                  <th className="px-4 py-3">Nome</th>
                  <th className="px-4 py-3">Data de Fabricação</th>
                  <th className="px-4 py-3">Validade</th>
                  <th className="px-4 py-3">Valor (R$)</th>
                  <th className="px-4 py-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((p) => (
                  <tr key={p.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">{p.nome}</td>
                    <td className="px-4 py-3">{p.dataFabricacao}</td>
                    <td className="px-4 py-3">{p.validade}</td>
                    <td className="px-4 py-3">{p.valor.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => abrirEditar(p)}
                          className="px-3 py-1 rounded-md border text-sm"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => removerProduto(p.id)}
                          className="px-3 py-1 rounded-md border text-sm text-red-600"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Modal do formulário */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              {editing ? "Editar produto" : "Novo produto"}
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {/* Inputs do formulário */}
              <label className="text-sm">
                Nome do remédio
                <input
                  value={formNome}
                  onChange={(e) => setFormNome(e.target.value)}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                />
              </label>

              <label className="text-sm">
                Data de fabricação
                <input
                  type="date"
                  value={formDataFabricacao}
                  onChange={(e) => setFormDataFabricacao(e.target.value)}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                />
              </label>

              <label className="text-sm">
                Validade
                <input
                  type="date"
                  value={formValidade}
                  onChange={(e) => setFormValidade(e.target.value)}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                />
              </label>

              <label className="text-sm">
                Valor (R$)
                <input
                  type="number"
                  step="0.01"
                  value={formValor}
                  onChange={(e) => setFormValor(parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                />
              </label>

              {/* Botões */}
              <div className="flex justify-end gap-3 mt-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-md border"
                >
                  Cancelar
                </button>
                <button
                  onClick={salvarProduto}
                  disabled={saving}
                  className="px-4 py-2 rounded-md bg-sky-600 text-white disabled:opacity-50"
                >
                  {saving ? "Salvando..." : "Salvar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}