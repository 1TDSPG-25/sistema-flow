import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Toast from "../../components/Toast/Toast";
import useTheme from "../../context/useTheme";
import type { TipoUser } from "../../types/tipoUsuario";
import type { ToastType } from "../../types/toast";
import { maskCpf } from "../../utils/maskCpf";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

const loginSchema = z.object({
  identificador: z
    .string()
    .min(5, { message: "Digite um CPF ou e-mail válido." }),
  senha: z
    .string()
    .min(8, { message: "A senha precisa ter no mínimo 8 caracteres." })
    .max(20, { message: "A senha pode ter no máximo 20 caracteres." }),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);
  const [identificadorMasked, setIdentificadorMasked] = useState<
    string | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginInput) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        setToast({ message: "Erro de conexão com o servidor.", type: "error" });
        setLoading(false);
        return;
      }

      const usuarios: TipoUser[] = await response.json();
      const identificador = data.identificador.trim().toLowerCase();

      const usuarioValido = usuarios.find(
        (user) =>
          (user.cpf === identificador ||
            user.email?.toLowerCase() === identificador) &&
          user.senha === data.senha
      );

      if (usuarioValido) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
        const authToken = btoa(
          JSON.stringify({
            id: usuarioValido.id ?? usuarioValido.cpf ?? usuarioValido.email,
            ts: Date.now(),
          })
        );
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("isLoggedIn", "true");
        setToast({ message: "Login realizado com sucesso!", type: "success" });
        setTimeout(() => {
          setLoading(false);
          reset();
          navigate("/", { replace: true });
          window.location.reload();
        }, 1200);
      } else {
        const usuarioExiste = usuarios.find(
          (user) =>
            user.cpf === identificador ||
            user.email?.toLowerCase() === identificador
        );
        if (usuarioExiste) {
          setToast({ message: "Senha incorreta.", type: "error" });
        } else {
          setToast({ message: "Usuário não encontrado.", type: "error" });
        }
        setLoading(false);
        setTimeout(() => {
          reset();
        }, 1200);
      }
    } catch (error: unknown) {
      let errorMsg = "Erro inesperado.";
      if (error instanceof Error) {
        errorMsg = error.message;
      } else if (typeof error === "string") {
        errorMsg = error;
      }
      setToast({ message: "Erro inesperado: " + errorMsg, type: "error" });
      setLoading(false);
      setTimeout(() => {
        reset();
      }, 1200);
    }
  };

  const bgClass = isDark ? "bg-gray-900" : "bg-gray-100";
  const cardClass = isDark
    ? "bg-gray-800 border border-gray-700 text-gray-100"
    : "bg-white border border-gray-300 text-gray-900";
  const labelClass = isDark ? "text-gray-200" : "text-gray-700";
  const inputClass = isDark
    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400";
  const linkClass = isDark ? "hover:text-blue-400" : "hover:text-blue-500";

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <main
        className={`p-8 min-h-screen flex items-center justify-center ${bgClass} transition-colors duration-500`}
      >
        <div
          className={`p-8 rounded-xl shadow-md w-full max-w-md ${cardClass} transition-colors duration-500`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Página de Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="identificador"
                className={`block text-sm font-medium ${labelClass}`}
              >
                CPF ou E-mail
              </label>
              <input
                id="identificador"
                type="text"
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${inputClass}`}
                placeholder="Digite seu CPF ou e-mail"
                {...register("identificador")}
                value={
                  identificadorMasked !== undefined
                    ? identificadorMasked
                    : undefined
                }
                onChange={(e) => {
                  const value = e.target.value;
                  const onlyDigits = value.replace(/\D/g, "");
                  // Se contém apenas números e até 11 dígitos, aplica máscara de CPF
                  if (
                    /^\d{0,11}$/.test(onlyDigits) &&
                    onlyDigits.length <= 11 &&
                    onlyDigits.length > 0
                  ) {
                    const masked = maskCpf(onlyDigits);
                    setIdentificadorMasked(masked);
                    register("identificador").onChange({
                      target: { value: masked },
                    });
                  } else {
                    // Se contém letras, @ ou ., trata como e-mail e não aplica máscara
                    setIdentificadorMasked(undefined);
                    register("identificador").onChange(e);
                  }
                }}
              />
              {errors.identificador && (
                <p className="text-red-500 text-sm">
                  {errors.identificador.message}
                </p>
              )}
            </div>

            {/* Campo de senha */}
            <div>
              <label
                htmlFor="senha"
                className={`block text-sm font-medium ${labelClass}`}
              >
                Senha
              </label>
              <input
                id="senha"
                type="password"
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${inputClass}`}
                {...register("senha")}
              />
              {errors.senha && (
                <p className="text-red-500 text-sm">{errors.senha.message}</p>
              )}
            </div>

            {/* Botão */}
            <button
              type="submit"
              className={`w-full flex justify-center items-center gap-2 py-2 px-4 rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <span className="mr-2">
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                </span>
              ) : (
                <FiLogIn size={18} />
              )}
              {loading ? "Entrando..." : "Entrar"}
            </button>

            {/* Link de cadastro */}
            <p
              className={`block text-sm sm:text-base mt-4 text-center ${labelClass}`}
            >
              Caso não tenha um usuário, clique em{" "}
              <Link
                to="/cadastro"
                className={`hover:underline font-bold ${linkClass}`}
              >
                Cadastrar
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
