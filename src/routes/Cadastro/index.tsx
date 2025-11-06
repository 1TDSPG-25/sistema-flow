import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Toast from "../../components/Toast/Toast";
import useTheme from "../../context/useTheme";
import type { ToastType } from "../../types/toast";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

const cadastroSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres." }),
  cpf: z.string().min(11, { message: "O CPF deve ter 11 dígitos." }),
  email: z.email({ message: "Por favor, insira um e-mail válido." }),
  dataNascimento: z.string().refine(
    (val) => {
      const hoje = new Date();
      const nasc = new Date(val);
      if (isNaN(nasc.getTime())) return false;
      const idade = hoje.getFullYear() - nasc.getFullYear();
      const m = hoje.getMonth() - nasc.getMonth();
      if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
        return idade - 1 >= 18;
      }
      return idade >= 18;
    },
    { message: "Você precisa ser maior de 18 anos." }
  ),
  senha: z
    .string()
    .min(8, { message: "A senha precisa ter no mínimo 8 caracteres." })
    .max(20, { message: "A senha pode ter no máximo 20 caracteres." })
    .refine(
      (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/.test(
          val
        ),
      {
        message:
          "Senha fraca: use letras maiúsculas, minúsculas, números e símbolos.",
      }
    ),
});

type CadastroInput = z.infer<typeof cadastroSchema>;

export default function CadastroForm() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);
  const [cpfMasked, setCpfMasked] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CadastroInput>({
    resolver: zodResolver(cadastroSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: CadastroInput) => {
    try {
      // Converte data para formato americano yyyy-mm-dd
      let dataAmericana = data.dataNascimento;
      if (dataAmericana.includes("/")) {
        const [dia, mes, ano] = dataAmericana.split("/");
        dataAmericana = `${ano}-${mes.padStart(2, "0")}-${dia.padStart(
          2,
          "0"
        )}`;
      }

      const dadosFormatados = {
        nome: data.nome,
        cpf: data.cpf,
        email: data.email.toLowerCase(),
        dataDeNascimento: dataAmericana,
        senha: data.senha,
        imagem: "https://avatars.githubusercontent.com/u/1?v=4",
      };

      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao buscar clientes existentes");

      const clientes: CadastroInput[] = await response.json();
      const clienteExistente = clientes.find(
        (user) =>
          user.cpf === dadosFormatados.cpf ||
          user.email === dadosFormatados.email
      );

      if (clienteExistente) {
        setToast({
          message: "CPF ou E-mail já cadastrado!",
          type: "error",
        });
        return;
      }

      const postResponse = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosFormatados),
      });

      if (!postResponse.ok) throw new Error("Erro ao cadastrar usuário");

      const clientesAtualizadosResponse = await fetch(API_URL);
      if (!clientesAtualizadosResponse.ok)
        throw new Error(
          "Cadastro feito, mas erro ao buscar usuário para login automático."
        );
      const clientesAtualizados: CadastroInput[] =
        await clientesAtualizadosResponse.json();
      const usuario = clientesAtualizados.find(
        (user) => user.email === dadosFormatados.email
      );
      if (usuario && usuario.senha === dadosFormatados.senha) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        setToast({
          message: "Bem-vindo! Login realizado automaticamente.",
          type: "success",
        });
        setTimeout(() => {
          navigate("/perfil");
        }, 1200);
      } else {
        setToast({
          message: "Cadastro feito, mas erro ao logar automaticamente.",
          type: "error",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setToast({
          message: "Erro ao cadastrar: " + error.message,
          type: "error",
        });
      } else {
        setToast({
          message: "Erro ao cadastrar. Tente novamente.",
          type: "error",
        });
      }
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="min-h-screen pb-20 flex items-center justify-center">
        <div
          className={`p-8 rounded-xl shadow-md w-full max-w-md mx-auto transition-colors duration-500 ${
            isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-6 text-center transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Criar Conta
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="dataNascimento"
                className={`block text-sm font-medium transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Data de Nascimento
              </label>
              <input
                id="dataNascimento"
                type="date"
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                {...register("dataNascimento")}
              />
              {errors.dataNascimento && (
                <p className="text-red-500 text-sm">
                  {errors.dataNascimento.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="nome"
                className={`block text-sm font-medium transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                {...register("nome")}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm">{errors.nome.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="cpf"
                className={`block text-sm font-medium transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                CPF
              </label>
              <input
                id="cpf"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                maxLength={14}
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                value={cpfMasked}
                onChange={(e) => {
                  let v = e.target.value.replace(/\D/g, "");
                  if (v.length > 11) v = v.slice(0, 11);
                  let masked = v;
                  if (v.length > 3) masked = v.slice(0, 3) + "." + v.slice(3);
                  if (v.length > 6)
                    masked = masked.slice(0, 7) + "." + masked.slice(7);
                  if (v.length > 9)
                    masked = masked.slice(0, 11) + "-" + masked.slice(11);
                  setCpfMasked(masked);
                  setValue("cpf", v, { shouldValidate: true });
                }}
                placeholder="000.000.000-00"
              />
              {errors.cpf && (
                <p className="text-red-500 text-sm">{errors.cpf.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="senha"
                className={`block text-sm font-medium transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Senha
              </label>
              <input
                id="senha"
                type="password"
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm transition-colors duration-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                {...register("senha")}
              />
              {errors.senha && (
                <p className="text-red-500 text-sm">{errors.senha.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
              >
                Cadastrar
              </button>
            </div>

            <p
              className={`block text-sm mt-4 transition-colors duration-500 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Caso já tenha um usuário, clique em{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-blue-500 font-bold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
