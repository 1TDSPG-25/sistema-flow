import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { TipoUser } from "../../types/tipoUsuario";
import { FiUser, FiMail, FiCreditCard, FiHash, FiAlertCircle, FiImage, FiLogOut } from "react-icons/fi";

const API_USERS = "http://localhost:3001/usuarios";

export default function Perfil() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<TipoUser | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [mostrarCpf, setMostrarCpf] = useState(false);

  const loggedId = useMemo<number | null>(() => {
    try {
      const rawUsuario = localStorage.getItem("usuarioLogado");
      if (rawUsuario) {
        const u = JSON.parse(rawUsuario);
        if (u?.id != null) return Number(u.id);
      }
      const rawAuthUser = localStorage.getItem("auth:user");
      if (rawAuthUser) {
        const u2 = JSON.parse(rawAuthUser);
        if (u2?.id != null) return Number(u2.id);
      }
      const rawId = localStorage.getItem("userId") || localStorage.getItem("auth:userId");
      return rawId ? Number(rawId) : null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const run = async () => {
      try {
        setCarregando(true);
        setErro(null);

        let targetId: number | null = null;
        if (id != null) {
          const parsed = Number(id);
          if (Number.isNaN(parsed)) throw new Error("ID inválido na URL. Use um número (ex.: /perfil/5).");
          targetId = parsed;
        } else if (loggedId != null) {
          targetId = loggedId;
        }

        if (targetId == null) {
          setErro("Nenhum usuário selecionado. Passe o ID na URL (ex.: /perfil/5) ou faça login para ver seu perfil.");
          setUser(null);
          setCarregando(false);
          return;
        }

        const base = API_USERS.replace(/\/$/, "");
        const r = await fetch(`${base}/${targetId}`, { headers: { Accept: "application/json" } });
        if (r.status === 404) throw new Error(`Usuário ${targetId} não encontrado.`);
        if (!r.ok) throw new Error(`Falha ao buscar usuário (${r.status}).`);

        const found = await r.json();
        setUser(coerceUser(found));
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : String(e ?? "Erro inesperado");
        setErro(message || "Erro inesperado");
        setUser(null);
      } finally {
        setCarregando(false);
      }
    };
    run();
  }, [id, loggedId]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("authToken");
    localStorage.removeItem("auth:user");
    localStorage.removeItem("userId");
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login", { replace: true });
  };

  const maskCpfStart = (cpf?: string) => {
    if (!cpf) return "—";
    const s = cpf.trim();
    if (s.length <= 6) return s;
    return s.slice(0, 6) + " ...";
  };

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
      <img src={user.avatar} alt={`Avatar de ${user.nome}`} className="h-28 w-28 rounded-full object-cover border" />
    ) : (
      <div className="h-28 w-28 rounded-full border flex items-center justify-center text-gray-400" aria-label="Usuário sem avatar" title="Usuário sem avatar">
        <FiImage className="text-2xl" aria-hidden />
      </div>
    );

  const InfoPill = ({ icon: Icon, text }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string }) => (
    <span className="inline-flex items-center gap-2 rounded-full border px-2 py-1 text-sm">
      <Icon aria-hidden />
      <span>{text}</span>
    </span>
  );

  return (
    <section className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <FiUser aria-hidden /> Perfil
        </h1>
        <div className="flex items-center gap-2">
          <button onClick={handleLogout} className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600 text-white">
            <FiLogOut aria-hidden /> Sair
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center rounded-xl border p-4 bg-white/60">
        <Avatar />
        <p className="mt-3 text-2xl font-semibold text-gray-900">{(user as any).nomeUser ?? "—"}</p>

        <div className="mt-6 w-full">
          <div className="text-center">
            <p className="text-lg font-medium truncate">{user.nome || "—"}</p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <InfoPill icon={FiHash} text={`ID: ${user.id}`} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-3">
              <dt className="text-xs uppercase text-gray-500 flex items-center gap-2">
                <FiUser aria-hidden /> Nome completo
              </dt>
              <dd className="text-sm mt-1">{user.nome || "—"}</dd>
            </div>

            <div className="rounded-lg border p-3">
              <dt className="text-xs uppercase text-gray-500 flex items-center gap-2">
                <FiMail aria-hidden /> E-mail
              </dt>
              <dd className="text-sm mt-1">{user.email || "—"}</dd>
            </div>

            <div className="rounded-lg border p-3 sm:col-span-2">
              <dt className="text-xs uppercase text-gray-500 flex items-center gap-2">
                <FiCreditCard aria-hidden /> CPF
              </dt>
              <dd className="text-sm mt-1 flex items-center justify-between">
                <span>{mostrarCpf ? user.cpf || "—" : maskCpfStart(user.cpf)}</span>
                <button onClick={() => setMostrarCpf((s) => !s)} className="px-2 py-1 text-sm bg-indigo-600 text-white rounded">
                  {mostrarCpf ? "Ocultar" : "Mostrar"}
                </button>
              </dd>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            <Link to="/" className="px-4 py-2 bg-gray-200 rounded self-center">Voltar</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function coerceUser(found: unknown): TipoUser {
  const f = found as Record<string, unknown>;

  const toNumber = (v: unknown): number => {
    if (v == null) return 0;
    if (typeof v === 'number') return v;
    const n = Number(v);
    return Number.isNaN(n) ? 0 : n;
  };

  const toString = (v: unknown): string => {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    return String(v);
  };

  return {
    id: toNumber(f.id),
    nome: toString(f.nome ?? ''),
    cpf: toString(f.cpf ?? ''),
    email: toString(f.email ?? ''),
    senha: toString(f.senha ?? ''),
    avatar: toString(f.avatar ?? ''),
  };
}