import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { TipoUser } from "../../types/tipoUsuario";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiLogIn } from "react-icons/fi";
const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

const loginSchema = z.object({
  email: z.email({ message: "Por favor, insira um e-mail válido." }),
  senha: z.string().min(8, { message: "A senha precisa ter no mínimo 8 caracteres." }),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm(){
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginInput>({
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
        const authToken = btoa(JSON.stringify({ id: usuarioValido.id ?? usuarioValido.email, ts: Date.now() }));
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

  return(
    <main className="p-8 pb-[50vh]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto justify-center items-center mt-15">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Página de Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input id="email" type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" {...register("email")} />
            {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
            <input id="senha" type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" {...register("senha")} />
            {errors.senha && (<p className="text-red-500 text-sm">{errors.senha.message}</p>)}
          </div>

          <button type="submit" className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
            <FiLogIn size={18} /> Entrar
          </button>

          <p className="block text-sm font-medium text-gray-700">Caso não tenha um usuário, clique em <Link to="/cadastro" className="hover:underline hover:text-blue-500 font-bold">Cadastrar</Link></p>
        </form>
      </div>
    </main>
  );
}