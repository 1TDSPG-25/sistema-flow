import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { TipoUser } from "../../types/tipoUsuario";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TipoUser>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data: TipoUser) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao buscar usuários");

      const usuarios: TipoUser[] = await response.json();

      const usuarioValido = usuarios.find(
        (user) =>
          user.nome.toLowerCase() === data.nome.toLowerCase() &&
          user.nomeUser.toLowerCase() === data.nomeUser.toLowerCase() &&
          user.email === data.email &&
          user.senha === data.senha
      );

      if (usuarioValido) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
        navigate("/home");
      } else {
        alert("Credenciais Inválidas.");
        reset();
      }
    } catch (error) {
      alert("Erro: " + error);
    }
  });

  return (
    <main>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Página de Login
        </h2>
        <div className="mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700"
              >
                Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                {...register("nome")}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm">{errors.nome.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="nomeUser"
                className="block text-sm font-medium text-gray-700"
              >
                Nome de Usuário
              </label>
              <input
                id="nomeUser"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                {...register("nomeUser")}
              />
              {errors.nomeUser && (
                <p className="text-red-500 text-sm">
                  {errors.nomeUser.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                id="senha"
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                {...register("senha")}
              />
              {errors.senha && (
                <p className="text-red-500 text-sm">{errors.senha.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Caso não tenha um Usuário, clique em{" "}
                <Link
                  to="/cadastro"
                  className="hover:underline hover:text-blue-500 font-bold"
                >
                  Cadastrar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
