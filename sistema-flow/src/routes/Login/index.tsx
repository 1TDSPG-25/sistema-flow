import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TipoUser } from "../../types/tipoUsuario";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

export default function Login() {

    const usuarioSchema = z.object({
        nome: z.string()
        .nonempty("O campo nome completo é obrigatório")
        .min(5, "Nome completo deve ter no mínimo de 5 caracteres"),
        nomeUser: z.string()
        .nonempty("O campo nome de usuário é obrigatório")
        .min(3, "Nome de usuário deve ter no mínimo 3 caracteres"),
        email: z.string()
        .nonempty("O campo e-mail é obrigatório")
        .email("E-mail inválido, exemplo de e-mail válido: example@gmail.com")
        .max(100, "Email deve ter no máximo 100 caracteres"),
        senha: z.string()
        .nonempty("O campo senha é obrigatório")
        .max(20, "Senha deve ter no máximo 20 caracteres")
    })

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}, reset } = useForm<TipoUser>({
        resolver: zodResolver(usuarioSchema),
    });

    const onSubmit = handleSubmit(async (data:TipoUser) => {

        try {
            const response = await fetch(API_URL);
            if(!response.ok) throw new Error("Erro ao buscar usuários");

            const usuarios: TipoUser[] = await response.json();

            const usuarioValido = usuarios.find(
                (user) => user.nome.toLowerCase() === data.nome.toLowerCase() && user.nomeUser.toLowerCase() === data.nomeUser.toLowerCase() && user.email === data.email && user.senha === data.senha
            );

            if(usuarioValido) {
                localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido))
                navigate("/home");
            } else {
                alert("Credenciais Inválidas.")
                reset();
            }

        } catch (error) {
            alert("Erro: " + error);
        }
    });

    return(
        <main>
         <h1  className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">Página de Login</h1>

            <div className="mx-auto">
                <form onSubmit={onSubmit} className="frmLogin space-y-5">
                    <fieldset>
                        <legend className= "sr-only">Entrar no sistema</legend>
                        <div>
                            <label htmlFor="idNomeUsuario" className="block text-sm font-medium text-gray-700">Nome Completo:</label>
                            <input type="text" id="idNome" className="bg-amber-200" {...register("nome")} 
                            
                            aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} />
                            
                            {errors.nome && <span role="alert" id="nome-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.nome.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="idNomeUsuario">Nome Usuário:</label>
                            <input type="text" id="idNomeUsuario" className="bg-amber-200" {...register("nomeUser")} 
                            
                            aria-invalid={!!errors.nomeUser} aria-describedby={errors.nomeUser ? "nome-user-error" : undefined} />
                            
                            {errors.nomeUser && <span role="alert" id="nome-user-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.nomeUser.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" id="idEmail" className="bg-amber-200" {...register("email")}
                            
                            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                            
                            {errors.email && <span role="alert" id="email-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.email.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="idSenha">Senha:</label>
                            <input type="text" id="idSenha" className="bg-amber-200" {...register("senha", )} 
                            
                            aria-invalid={!!errors.senha} aria-describedby={errors.senha ? "senha-error" : undefined} />
                            
                            {errors.senha && <span role="alert" id="senha-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.senha.message}</span>}
                        </div>
                        <div>
                            <button type="submit">Entrar</button>
                        </div>
                        <div>
                            <p>Caso não tenha um Usuário, clique em <Link to="/cadastro" className="hover:underline hover:text-blue-500 font-bold">Cadastrar-se</Link></p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
    );
}