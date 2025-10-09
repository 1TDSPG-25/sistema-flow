
export default function Login() {
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