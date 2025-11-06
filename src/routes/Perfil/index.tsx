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
import Spinner from "../../components/Spinner/Spinner";
import useTheme from "../../context/useTheme";
import type { TipoUser } from "../../types/tipoUsuario";

export default function Perfil() {
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [imgLoading, setImgLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [user, setUser] = useState<TipoUser | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [mostrarCpf, setMostrarCpf] = useState(false);
  const loggedId = useMemo(() => {
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
        const coerced = coerceUser(usuario);
        setUser(coerced);
        const imgLocal = localStorage.getItem("userImage");
        if (imgLocal) setImgPreview(imgLocal);
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
  }, [id, loggedId, navigate]);

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
        <Spinner text="Carregando dados do usuário…" />
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
    imgPreview || user.imagem ? (
      <img
        src={imgPreview || user.imagem}
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
  return (
    <section className="min-h-screen pb-20 max-w-2xl mx-auto p-4">
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
        <form
          className="mt-3 flex flex-col items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label
            htmlFor="imgUpload"
            tabIndex={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-700 text-amber-50 font-semibold shadow-md cursor-pointer transition-all duration-200 hover:bg-slate-600 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Alterar foto de perfil"
          >
            <FiImage className="text-xl" aria-hidden />
            Alterar foto de perfil
          </label>
          <input
            id="imgUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) {
                setErro("Nenhum arquivo selecionado.");
                return;
              }
              const maxSize = 500 * 1024;
              if (file.size > maxSize) {
                setErro(
                  `Imagem muito grande (${(file.size / 1024).toFixed(
                    1
                  )} KB). Escolha uma imagem menor que ${(
                    maxSize / 1024
                  ).toFixed(0)} KB.`
                );
                return;
              }
              if (!user) {
                setErro("Usuário não encontrado. Faça login novamente.");
                return;
              }
              setImgLoading(true);
              let finished = false;
              try {
                const reader = new FileReader();
                reader.onload = function (ev) {
                  const base64img = ev.target?.result as string;
                  localStorage.setItem("userImage", base64img);
                  setImgPreview(base64img);
                  setImgLoading(false);
                  finished = true;
                };
                reader.onerror = function () {
                  setErro("Erro ao ler imagem");
                  setImgLoading(false);
                  finished = true;
                };
                reader.readAsDataURL(file);
                setTimeout(() => {
                  if (!finished) {
                    setImgLoading(false);
                    setErro("Tempo excedido ao processar imagem");
                  }
                }, 10000);
              } catch (err) {
                let msg = "Erro ao processar imagem";
                if (err instanceof Error && err.message) {
                  msg += ": " + err.message;
                }
                setErro(msg);
                setImgLoading(false);
              }
            }}
          />
          {imgLoading && (
            <span className="text-xs text-gray-500">Carregando imagem...</span>
          )}
        </form>
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
    id: toString(f.codigo ?? f.id),
    nome: toString(f.nome ?? ""),
    cpf: toString(f.cpf ?? ""),
    email: toString(f.email ?? ""),
    senha: toString(f.senha ?? ""),
    imagem: toString(f.imagem ?? ""),
    dataDeNascimento: toString(f.dataDeNascimento ?? ""),
  };
}
