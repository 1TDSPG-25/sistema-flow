import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiLogIn } from "react-icons/fi";
import type { TipoUser } from "../../types/tipoUsuario";
import useTheme from "../../context/useTheme";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

const loginSchema = z.object({
  email: z.email({ message: "Por favor, insira um e-mail válido." }),
  senha: z.string()
    .min(8, { message: "A senha precisa ter no mínimo 8 caracteres." })
    .max(20, { message: "A senha pode ter no máximo 20 caracteres." })
    .refine(
      (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/.test(val),
      {
        message:
          "Senha fraca: use letras maiúsculas, minúsculas, números e símbolos.",
      }
    ),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

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
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao buscar usuários");

      const usuarios: TipoUser[] = await response.json();

      const usuarioValido = usuarios.find(
        (user) =>
          user.email?.toLowerCase().trim() === data.email.toLowerCase().trim() &&
          user.senha === data.senha
      );

      if (usuarioValido) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
        const authToken = btoa(
          JSON.stringify({ id: usuarioValido.id ?? usuarioValido.email, ts: Date.now() })
        );
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("isLoggedIn", "true");

        navigate("/", { replace: true });
        window.location.reload();
      } else {
        alert("Credenciais Inválidas.");
        reset();
      }
    } catch (error) {
      alert("Erro: " + error);
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
    <main className={`p-8 min-h-screen flex items-center justify-center ${bgClass} transition-colors duration-500`}>
      <div className={`p-8 rounded-xl shadow-md w-full max-w-md ${cardClass} transition-colors duration-500`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Página de Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo de e-mail */}
          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${labelClass}`}>
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${inputClass}`}
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Campo de senha */}
          <div>
            <label htmlFor="senha" className={`block text-sm font-medium ${labelClass}`}>
              Senha
            </label>
            <input
              id="senha"
              type="password"
              className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${inputClass}`}
              {...register("senha")}
            />
            {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-4 rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            <FiLogIn size={18} /> Entrar
          </button>

          {/* Link de cadastro */}
          <p className={`block text-sm sm:text-base mt-4 text-center ${labelClass}`}>
            Caso não tenha um usuário, clique em{" "}
            <Link to="/cadastro" className={`hover:underline font-bold ${linkClass}`}>
              Cadastrar
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
