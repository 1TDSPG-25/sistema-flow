import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Toast from "../../components/Toast/Toast";
import useTheme from "../../context/useTheme";
import type { ToastType } from "../../types/toast";
import { maskCpf } from "../../utils/maskCpf";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

const cadastroSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres." }),
  cpf: z
    .string()
    .min(11, { message: "O CPF deve ter 11 dígitos." })
    .refine(
      (cpf) => {
        // Validação de CPF: formato e dígito verificador
        cpf = cpf.replace(/\D/g, "");
        if (cpf.length !== 11) return false;
        // Elimina CPFs inválidos conhecidos
        if (/^(\d)\1+$/.test(cpf)) return false;
        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;
        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;
        return true;
      },
      { message: "CPF inválido." }
    ),
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
  const toastRef = useState<HTMLDivElement | null>(null);
  const [cpfMasked, setCpfMasked] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CadastroInput>({
    resolver: zodResolver(cadastroSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: CadastroInput) => {
    setLoading(true);
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
        cpf: maskCpf(data.cpf),
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
        setLoading(false);
        return;
      }

      const postResponse = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosFormatados),
      });

      if (!postResponse.ok) {
        setLoading(false);
        throw new Error("Erro ao cadastrar usuário");
      }

      const clientesAtualizadosResponse = await fetch(API_URL);
      if (!clientesAtualizadosResponse.ok) {
        setLoading(false);
        throw new Error(
          "Cadastro feito, mas erro ao buscar usuário para login automático."
        );
      }
      const clientesAtualizados: CadastroInput[] =
        await clientesAtualizadosResponse.json();
      const usuario = clientesAtualizados.find(
        (user) => user.email === dadosFormatados.email
      );
      if (usuario && usuario.senha === dadosFormatados.senha) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        setToast({
          message: "Cadastro realizado com sucesso!",
          type: "success",
        });
        setTimeout(() => {
          setLoading(false);
          reset();
          navigate("/perfil");
        }, 1200);
      } else {
        setToast({
          message: "Erro ao cadastrar usuário.",
          type: "error",
        });
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 1500);
      }
    } catch (error: unknown) {
      setLoading(false);
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
        <div
          ref={(el) => {
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            toastRef[1](el);
          }}
        >
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        </div>
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
                } ${errors.dataNascimento ? "border-red-500" : ""}`}
                {...register("dataNascimento")}
                disabled={loading}
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
                } ${errors.nome ? "border-red-500" : ""}`}
                {...register("nome")}
                disabled={loading}
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
                } ${errors.cpf ? "border-red-500" : ""}`}
                value={cpfMasked}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "");
                  setCpfMasked(maskCpf(v));
                  setValue("cpf", v, { shouldValidate: true });
                }}
                placeholder="000.000.000-00"
                disabled={loading}
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
                } ${errors.email ? "border-red-500" : ""}`}
                {...register("email")}
                disabled={loading}
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
                } ${errors.senha ? "border-red-500" : ""}`}
                {...register("senha")}
                disabled={loading}
              />
              {errors.senha && (
                <p className="text-red-500 text-sm">{errors.senha.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="mr-2">
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  </span>
                ) : null}
                {loading ? "Cadastrando..." : "Cadastrar"}
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
