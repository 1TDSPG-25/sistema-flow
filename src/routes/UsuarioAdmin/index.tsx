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