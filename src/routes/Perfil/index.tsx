import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { TipoUser } from "../../types/tipoUsuario";
import { FiUser, FiMail, FiAlertCircle, FiImage, FiLogOut } from "react-icons/fi";

const API_USERS = "http://localhost:3001/usuarios";

export default function Perfil() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<TipoUser | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);

  const loggedId = useMemo<number | null>(() => {
    try {
      const rawUsuario = localStorage.getItem("usuarioLogado");
      if (rawUsuario) {
        const u = JSON.parse(rawUsuario);
        if (u?.id != null) return Number(u.id);
      }
      const rawId = localStorage.getItem("userId");
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
          if (Number.isNaN(parsed)) throw new Error("ID inválido na URL.");
          targetId = parsed;
        } else if (loggedId != null) {
          targetId = loggedId;
        }

        if (targetId == null) {
          setErro("Nenhum usuário selecionado. Faça login ou passe o ID na URL.");
          setUser(null);
          setCarregando(false);
          return;
        }

        const r = await fetch(`${API_USERS}/${targetId}`);
        if (!r.ok) throw new Error(`Falha ao buscar usuário (${r.status}).`);
        const found = await r.json();
        setUser(found as TipoUser);
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : String(e ?? "Erro inesperado");
        setErro(message);
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

  return (
    <section className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <FiUser aria-hidden /> Perfil
        </h1>
        <button onClick={handleLogout} className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600 text-white">
          <FiLogOut aria-hidden /> Sair
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center rounded-xl border p-4 bg-white/60">
        {user.avatar ? (
          <img src={user.avatar} alt={`Avatar de ${user.nome}`} className="h-28 w-28 rounded-full object-cover border" />
        ) : (
          <div className="h-28 w-28 rounded-full border flex items-center justify-center text-gray-400">
            <FiImage className="text-2xl" aria-hidden />
          </div>
        )}

        <p className="mt-3 text-2xl font-semibold text-gray-900">{(user as any).nomeUser ?? "—"}</p>
        <p className="text-lg font-medium mt-2">{user.nome || "—"}</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
          <div className="rounded-lg border p-3">
            <dt className="text-xs uppercase text-gray-500">E-mail</dt>
            <dd className="text-sm mt-1">{user.email || "—"}</dd>
          </div>

          <div className="rounded-lg border p-3">
            <dt className="text-xs uppercase text-gray-500">CPF</dt>
            <dd className="text-sm mt-1">{maskCpfStart(user.cpf)}</dd>
          </div>
        </div>

        <div className="mt-4">
          <Link to="/" className="px-4 py-2 bg-gray-200 rounded">Voltar</Link>
        </div>
      </div>
    </section>
  );
}