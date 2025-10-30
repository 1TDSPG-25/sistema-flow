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

         const base = API_USERS.replace(/\/$/, '');
  const r = await fetch(`${base}/${targetId}`, { headers: { Accept: 'application/json' } });
        if (r.status === 404) throw new Error(`Usuário ${targetId} não encontrado.`);
        if (!r.ok) throw new Error(`Falha ao buscar usuário (${r.status}).`);

        const found = await r.json();
        setUser(coerceUser(found));
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : String(e ?? 'Erro inesperado');
        setErro(message || 'Erro inesperado');
        setUser(null);
      } finally {
        setCarregando(false);
      }
    };
    run();
  }, [id, loggedId]);

  if (carregando) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-gray-500">
        <div className="flex items-center gap-2">
          <FiUser className="animate-pulse" aria-hidden />
          <span>Carregando dados do usuário…</span>
        </div>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-red-600 flex items-center gap-2">
        <FiAlertCircle aria-hidden />
        <span>{erro}</span>
      </div>
    );
  }

  if (!user) return null;

  const Avatar = () =>
    user.avatar ? (
      <img src={user.avatar} alt={`Avatar de ${user.nome}`} className="h-20 w-20 rounded-full object-cover border" />
    ) : (
      <div className="h-20 w-20 rounded-full border flex items-center justify-center text-gray-400" aria-label="Usuário sem avatar" title="Usuário sem avatar">
        <FiImage className="text-2xl" aria-hidden />
      </div>
    );

  const InfoPill = ({
    icon: Icon, text, sr,
  }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string; sr?: string }) => (
    <span className="inline-flex items-center gap-2 rounded-full border px-2 py-1 text-sm">
      <Icon aria-hidden />
      {sr ? <span className="sr-only">{sr}</span> : null}
      <span>{text}</span>
    </span>
  );

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <FiUser aria-hidden /> Dados do Usuário
      </h1>

      <div className="mt-4 flex items-center gap-4 rounded-xl border p-4 bg-white/60 dark:bg-gray-800/60">
        <Avatar />
        <div className="min-w-0">
          <p className="text-lg font-medium truncate">{user.nome}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <InfoPill icon={FiHash} text={`ID: ${user.id}`} />
            {user.email && <InfoPill icon={FiMail} text={user.email} sr="E-mail" />}
            {user.cpf && <InfoPill icon={FiCreditCard} text={user.cpf} sr="CPF" />}
          </div>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-3">
          <dt className="text-xs uppercase text-gray-500 flex items-center gap-2">
            <FiUser aria-hidden /> Nome completo
          </dt>
          <dd className="text-sm mt-1">{user.nome || '—'}</dd>
        </div>
        <div className="rounded-lg border p-3">
          <dt className="text-xs uppercase text-gray-500 flex items-center gap-2">
            <FiMail aria-hidden /> E-mail
          </dt>
          <dd className="text-sm mt-1">{user.email || '—'}</dd>
        </div>
        <div className="rounded-lg border p-3">
          <dt className="text-xs uppercase text-gray-500 flex items-center gap-2">
            <FiCreditCard aria-hidden /> CPF
          </dt>
          <dd className="text-sm mt-1">{user.cpf || '—'}</dd>
        </div>
      </dl>
    </section>
  );
}
