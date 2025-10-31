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