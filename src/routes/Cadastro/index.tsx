import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../../context/useTheme";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

const cadastroSchema = z.object({
    nome: z.string().min(3, { message: "O nome precisa ter no mínimo 3 caracteres." }),
    cpf: z.string().min(11, { message: "O CPF deve ter 11 dígitos." }),
    email: z.email({ message: "Por favor, insira um e-mail válido." }),
    senha: z.string().min(8, { message: "A senha precisa ter no mínimo 8 caracteres." }),
});

type CadastroInput = z.infer<typeof cadastroSchema>;

export default function CadastroForm() {
    const { isDark } = useTheme();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<CadastroInput>({
        resolver: zodResolver(cadastroSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: CadastroInput) => {
        try {
            const dadosFormatados = { ...data, email: data.email.toLowerCase() };

            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Erro ao buscar usuários existentes");

            const usuarios: CadastroInput[] = await response.json();

            const usuarioExistente = usuarios.find(
                (user) => user.cpf === dadosFormatados.cpf || user.email === dadosFormatados.email
            );

            if (usuarioExistente) {
                alert("CPF ou E-mail já cadastrado!");
                return;
            }

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosFormatados),
            });

            if (!res.ok) throw new Error("Erro ao cadastrar usuário");

            navigate("/login");
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert("Erro ao cadastrar: " + error.message);
            } else {
                alert("Erro ao cadastrar. Tente novamente.");
            }
        }
    };

    return (
        <div className={`p-8 rounded-xl shadow-md w-full max-w-md mx-auto transition-colors duration-500 ${isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}>
            <h2 className={`text-2xl font-bold mb-6 text-center transition-colors duration-500 ${isDark ? "text-gray-100" : "text-gray-800"}`}>Criar Conta</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="nome" className={`block text-sm font-medium transition-colors duration-500 ${isDark ? "text-gray-200" : "text-gray-700"}`}>Nome Completo</label>
                    <input
                        id="nome"
                        type="text"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${isDark ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`}
                        {...register("nome")}
                    />
                    {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
                </div>

                <div>
                    <label htmlFor="cpf" className={`block text-sm font-medium transition-colors duration-500 ${isDark ? "text-gray-200" : "text-gray-700"}`}>CPF</label>
                    <input
                        id="cpf"
                        type="text"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${isDark ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`}
                        {...register("cpf")}
                    />
                    {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className={`block text-sm font-medium transition-colors duration-500 ${isDark ? "text-gray-200" : "text-gray-700"}`}>E-mail</label>
                    <input
                        id="email"
                        type="email"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${isDark ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`}
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="senha" className={`block text-sm font-medium transition-colors duration-500 ${isDark ? "text-gray-200" : "text-gray-700"}`}>Senha</label>
                    <input
                        id="senha"
                        type="password"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${isDark ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`}
                        {...register("senha")}
                    />
                    {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    >
                        Cadastrar
                    </button>
                </div>

                <p className={`block text-sm mt-4 transition-colors duration-500 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                    Caso já tenha um usuário, clique em <Link to="/login" className="hover:underline hover:text-blue-500 font-bold">Login</Link>
                </p>
            </form>
        </div>
    );
}
