import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeE() {
    return (
      <>
        <section className="px-10">
          <div className="flex">
            <h1>Equipe E</h1>
            <Link to="/integrantes" className="flex">
              <IoArrowBackCircleOutline />
              Voltar
            </Link>
          </div>
          <hr />
          <p>Conheça um pouco mais a Equipe E:</p>

          <div className="flex gap-5">
            {/* Card 1 */}
            <div className="bg-[#EFD2C3]">
              <img
                src="https://github.com/orlando-IDA.png"
                alt="Foto de um usuário do GitHub."
              />
              <h2>Orlando Gonçalves</h2>
              <p>Desenvolvedor</p>
              <p>Redes Sociais:</p>
              <Link
                to="https://github.com/orlando-IDA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link to="" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EFD2C3]">
              <img
                src="https://github.com/KiuboHIrata.png"
                alt="Foto de um usuário do GitHub."
              />
              <h2>Alexandre Hirata</h2>
              <p>Desenvolvedor</p>
              <p>Redes Sociais:</p>
              <Link
                to="https://github.com/KiuboHIrata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link to="" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EFD2C3]">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762102170/photo-git-user_xq1xkd.png"
                alt="Foto de um usuário do GitHub."
              />
              <h2>Gabriel Martins</h2>
              <p>Desenvolvedor Back-end</p>
              <p>Redes Sociais:</p>
              <Link
                to="https://github.com/ggabmartins"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link to="" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="px-10 py-20">
            <h2>Qual foi o papel da Equipe E durante o projeto?</h2>
            {/* Card tarefa 1 */}
            <div>
                <img src="" alt="" />
                <h2>Página de Cadastro</h2>
                <p>Equipe responsável pelo desenvolvimento da página de cadastro de conta, implementando o formulário de registro de novos usuários, validação dos dados inseridos e integração com o sistema de armazenamento das informações.</p>
                <Link to="" target="_blank" rel="noopener noreferrer">Clique aqui para ver mais</Link>
            </div>

            {/* Card tarefa 2 */}
            <div>
                <img src="" alt="" />
                <h2>Página de Produtos</h2>
                <p>Desenvolveram também uma página de produtos, que exibe o nome, o preço e as informações detalhadas de cada item disponível, proporcionando uma visualização clara e organizada para os usuários.</p>
                <Link to="" target="_blank" rel="noopener noreferrer">Clique aqui para ver mais</Link>
            </div>
        </section>
        <section className="px-10 py-20">
            <h2>Qual foi o papel da Equipe A durante o projeto?</h2>
            {/* Card tarefa */}
            <div>
                <img src="" alt="" />
                <h2>Bugfix</h2>
                <p>Equipe responsável pelo conserto de diversos erros no site. Desde API da página Home, reformulação de rotas.</p>
                <Link to="" target="_blank" rel="noopener noreferrer">Clique aqui para ver mais</Link>
            </div>
        </section>
      </>
    );
}