import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { TipoUser } from "../../types/tipoUser";
import { useNavigate } from "react-router-dom";
import Logado from "../../components/Logado/logado";
const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

export default function Login() {

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}, reset } = useForm<TipoUser>({
        mode:"onChange"
    });

    const onSubmit = handleSubmit(async (data:TipoUser) => {

        try {
            const response = await fetch(API_URL);
            if(!response.ok) throw new Error("Erro ao buscar usuários");

            const usuarios: TipoUser[] = await response.json();

            const usuarioValido = usuarios.find(
                (user) => user.nomeUsuario.toLowerCase() === data.nomeUsuario.toLowerCase() && user.email.toLowerCase() === data.email.toLowerCase()
            );

            if(usuarioValido) {
                localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido))
                navigate("/home");
            } else {
                alert("Usuário ou E-mail Inválido.")
                reset();
            }

        } catch (error) {
            alert("Erro ao logar. Tente novamente.");
        }
    });

    return(
        <main>
         <h1  className="text-center text-3xl font-bold">Página de Login</h1>

            <div className="mx-auto">
                <form className="frmLogin">
                    <fieldset>
                        <legend>Entrar no sistema</legend>
                        <div>
                            <label htmlFor="idNomeUsuario">Nome Usuário:</label>
                            <input type="text" id="idNomeUsuario" className="bg-amber-200"/>
                        </div>
                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" id="idEmail" className="bg-amber-200" />
                        </div>

                        <div>
                            <button type="submit">Entrar</button>
                        </div>

                        <div>
                            <p>Caso não tenha um Usuário, clique em <Link to="/cadastro" className="hover:underline hover:text-blue-500">Cadastrar-se</Link></p>
                        </div>
                    </fieldset>
                </form>
            </div>

        </main>
    );
}