import { useEffect, useMemo, useState } from "react";
import {
  FiAlertCircle,
  FiCreditCard,
  FiImage,
  FiLogOut,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import useTheme from "../../context/useTheme";
import type { TipoUser } from "../../types/tipoUsuario";

const API_USERS = import.meta.env.VITE_API_URL_USUARIOS;

export default function Perfil() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const [user, setUser] = useState<TipoUser | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [mostrarCpf, setMostrarCpf] = useState(false);

  const loggedId = useMemo<string | null>(() => {
    try {
      const rawUsuario = localStorage.getItem("usuarioLogado");
      if (rawUsuario) {
        const u = JSON.parse(rawUsuario);
        if (u?.id != null) return String(u.id);
      }
      const rawAuthUser = localStorage.getItem("auth:user");
      if (rawAuthUser) {
        const u2 = JSON.parse(rawAuthUser);
        if (u2?.id != null) return String(u2.id);
      }
      const rawId =
        localStorage.getItem("userId") || localStorage.getItem("auth:userId");
      return rawId ? rawId : null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const run = async () => {
      try {
        setCarregando(true);
        setErro(null);

        const rawUsuario = localStorage.getItem("usuarioLogado");
        if (!rawUsuario) {
          navigate("/login", { replace: true });
          return;
        }
        const usuario = JSON.parse(rawUsuario);
        const email = usuario?.email;
        const senha = usuario?.senha;
        if (!email || !senha) {
          setErro("Não foi possível identificar o usuário logado.");
          setUser(null);
          setCarregando(false);
          return;
        }
        const r = await fetch(API_USERS, {
          headers: { Accept: "application/json" },
        });
        if (!r.ok) throw new Error(`Falha ao buscar clientes (${r.status}).`);
        const clientes = await r.json();
        const found = clientes.find(
          (c: TipoUser) => c.email === email && c.senha === senha
        );
        if (!found)
          throw new Error("Usuário logado não encontrado na base de dados.");
        setUser(coerceUser(found));
      } catch (e: unknown) {
        const message =
          e instanceof Error ? e.message : String(e ?? "Erro inesperado");
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
    window.location.reload();
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
    user.imagem ? (
      <img
        src={user.imagem}
        alt={`Avatar de ${user.nome}`}
        className="h-28 w-28 rounded-full object-cover border-slate-900 border-4"
      />
    ) : (
      <div
        className="h-28 w-28 rounded-full border border-slate-900 flex items-center justify-center text-gray-400"
        aria-label="Usuário sem avatar"
        title="Usuário sem avatar"
      >
        <FiImage className="text-2xl" aria-hidden />
      </div>
    );
  // const InfoPill = ({ icon: Icon, text }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string }) => (
  //   <span className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-2 py-1 text-sm">
  //     <Icon aria-hidden />
  //     <span>{text}</span>
  //   </span>
  // );
  return (
    <section className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <FiUser aria-hidden /> Perfil
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600 text-white"
          >
            <FiLogOut aria-hidden /> Sair
          </button>
        </div>
      </div>

      <div
        className={`mt-4 flex flex-col items-center rounded-xl border-4 p-4 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-black"
        }`}
      >
        <Avatar />
        <p
          className={`mt-3 text-2xl font-semibold ${
            isDark ? "text-amber-50" : "text-gray-900"
          }`}
        ></p>
        <div className="mt-6 w-full">
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              className={`rounded-lg border p-3 ${
                isDark ? "border-slate-700" : "border-slate-900"
              }`}
            >
              <dt
                className={`text-xs uppercase flex items-center gap-2 ${
                  isDark ? "text-blue-200" : "text-black"
                }`}
              >
                <FiUser aria-hidden /> Nome completo
              </dt>
              <dd className={`text-sm mt-1 ${isDark ? "" : "text-black"}`}>
                {user.nome || "—"}
              </dd>
            </div>

            <div
              className={`rounded-lg border p-3 ${
                isDark ? "border-slate-700" : "border-slate-900"
              }`}
            >
              <dt
                className={`text-xs uppercase flex items-center gap-2 ${
                  isDark ? "text-blue-200" : "text-black"
                }`}
              >
                <FiMail aria-hidden /> E-mail
              </dt>
              <dd className={`text-sm mt-1 ${isDark ? "" : "text-black"}`}>
                {user.email || "—"}
              </dd>
            </div>

            <div
              className={`rounded-lg border p-3 sm:col-span-2 ${
                isDark ? "border-slate-700" : "border-slate-900"
              }`}
            >
              <dt
                className={`text-xs uppercase flex items-center gap-2 ${
                  isDark ? "text-blue-200" : "text-black"
                }`}
              >
                <FiCreditCard aria-hidden /> CPF
              </dt>
              <dd
                className={`text-sm mt-1 flex items-center justify-between ${
                  isDark ? "" : "text-black"
                }`}
              >
                <span>
                  {mostrarCpf ? user.cpf || "—" : maskCpfStart(user.cpf)}
                </span>
                <button
                  onClick={() => setMostrarCpf((s) => !s)}
                  className="px-4 py-2 rounded bg-slate-700 text-amber-50 hover:bg-slate-600"
                >
                  {mostrarCpf ? "Ocultar" : "Mostrar"}
                </button>
              </dd>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded self-center bg-slate-700 text-amber-50 hover:bg-slate-600"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function coerceUser(found: unknown): TipoUser {
  const f = found as Record<string, unknown>;

  const toString = (v: unknown): string => {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return String(v);
  };

  return {
    id: toString(f.id),
    nome: toString(f.nome ?? ""),
    cpf: toString(f.cpf ?? ""),
    email: toString(f.email ?? ""),
    senha: toString(f.senha ?? ""),
    imagem: toString(f.imagem ?? ""),
  };
}
