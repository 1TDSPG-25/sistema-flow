import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

export type Produto = {
  id?: number;
  nome: string;
  dataFabricacao: string;
  validade: string;
  valor: number;
};

const API_URL =
  import.meta.env.VITE_API_URL_PRODUTOS || "http://localhost:3001/produtos";

export default function AdminProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editing, setEditing] = useState<Produto | null>(null);

  const [formNome, setFormNome] = useState<string>("");
  const [formDataFabricacao, setFormDataFabricacao] = useState<string>("");
  const [formValidade, setFormValidade] = useState<string>("");
  const [formValor, setFormValor] = useState<number>(0);

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    buscarProdutos();
  }, []);

  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage(null);
        setError(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

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

  async function salvarProduto(): Promise<void> {
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
    if (new Date(formValidade) < new Date(formDataFabricacao)) {
      setError("A validade não pode ser anterior à data de fabricação.");
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
      setFormNome("");
      setFormDataFabricacao("");
      setFormValidade("");
      setFormValor(0);
      setEditing(null);
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

  function abrirEditar(p: Produto): void {
    setEditing(p);
    setFormNome(p.nome);
    setFormDataFabricacao(p.dataFabricacao);
    setFormValidade(p.validade);
    setFormValor(p.valor);
    setShowForm(true);
  }

  return (
    <div className="min-h-screen bg-slate-800 text-slate-100 p-6">
      <header className="flex items-center justify-between mb-6 border-b border-slate-700 pb-3">
        <div>
          <h1 className="text-2xl font-semibold text-sky-400">
            Painel de Produtos
          </h1>
          <p className="text-sm text-slate-400">
            Gerencie os remédios cadastrados no sistema.
          </p>
        </div>
        <button
          onClick={abrirNovo}
          className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          + Novo produto
        </button>
      </header>

      {error && (
        <div className="bg-red-500/20 text-red-400 border border-red-500/30 p-3 rounded mb-4">
          {error}
        </div>
      )}
      {message && (
        <div className="bg-green-500/20 text-green-400 border border-green-500/30 p-3 rounded mb-4">
          {message}
        </div>
      )}

      <main>
        {loading ? (
          <div className="text-center py-8">
            <Spinner text="Carregando produtos..." />
          </div>
        ) : produtos.length === 0 ? (
          <p className="text-center text-slate-400 py-8">
            Nenhum produto encontrado.
          </p>
        ) : (
          <div className="bg-slate-700 rounded-lg overflow-hidden shadow-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-700 text-sky-300">
                <tr>
                  <th className="px-4 py-3">Nome</th>
                  <th className="px-4 py-3">Data de Fabricação</th>
                  <th className="px-4 py-3">Validade</th>
                  <th className="px-4 py-3">Valor (R$)</th>
                  <th className="px-4 py-3 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t border-slate-600 hover:bg-slate-600/60"
                  >
                    <td className="px-4 py-3">{p.nome}</td>
                    <td className="px-4 py-3">
                      {new Date(p.dataFabricacao).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(p.validade).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-4 py-3 text-sky-400 font-medium">
                      R$ {p.valor.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => abrirEditar(p)}
                          className="px-3 py-1 rounded-md border border-sky-500 text-sky-400 hover:bg-sky-500/10 transition"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => removerProduto(p.id)}
                          className="px-3 py-1 rounded-md border border-red-500 text-red-400 hover:bg-red-500/10 transition"
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

      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-slate-700 text-slate-100 rounded-xl max-w-lg w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-sky-400">
              {editing ? "Editar produto" : "Novo produto"}
            </h2>

            <div className="grid grid-cols-1 gap-3">
              <label className="text-sm">
                Nome do remédio
                <input
                  value={formNome}
                  onChange={(e) => setFormNome(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
                />
              </label>

              <label className="text-sm">
                Data de fabricação
                <input
                  type="date"
                  value={formDataFabricacao}
                  onChange={(e) => setFormDataFabricacao(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
                />
              </label>

              <label className="text-sm">
                Validade
                <input
                  type="date"
                  value={formValidade}
                  onChange={(e) => setFormValidade(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
                />
              </label>

              <label className="text-sm">
                Valor (R$)
                <input
                  type="number"
                  step="0.01"
                  value={formValor}
                  onChange={(e) => setFormValor(parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
                />
              </label>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-md border border-slate-500 text-slate-300 hover:bg-slate-600/50 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={salvarProduto}
                  disabled={saving}
                  className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-white disabled:opacity-50 transition"
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
