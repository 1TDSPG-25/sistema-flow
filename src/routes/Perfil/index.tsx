import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { TipoUser } from '../../types/tipoUsuario';
import { FiUser, FiMail, FiCreditCard, FiHash, FiAlertCircle, FiImage } from 'react-icons/fi';

const API_USERS = 'http://localhost:3001/usuarios';

export default function Perfil() {
  const { id } = useParams();                 
  const [user, setUser] = useState<TipoUser | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);

  const loggedId = useMemo<number | null>(() => {
    try {
      const raw = localStorage.getItem('auth:user');
      if (raw) {
        const u = JSON.parse(raw);
        if (u?.id != null) return Number(u.id);
      }
      const rawId = localStorage.getItem('userId');
      return rawId ? Number(rawId) : null;
    } catch { return null; }
  }, []);

  useEffect(() => {
    const run = async () => {
      try {
        setCarregando(true);
        setErro(null);
        let targetId: number | null = null;
        if (id != null) {
          const parsed = Number(id);
          if (Number.isNaN(parsed)) throw new Error('ID inválido na URL. Use um número (ex.: /perfil/5).');
          targetId = parsed;
        } else if (loggedId != null) {
          targetId = loggedId;
        }
        if (targetId == null) {
          setErro('Nenhum usuário selecionado. Passe o ID na URL (ex.: /perfil/5) ou faça login para ver seu perfil.');
          setUser(null);
          setCarregando(false);
          return;
        }

       