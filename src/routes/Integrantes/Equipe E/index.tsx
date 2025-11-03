import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeE() {
    return (
      <>
        <section className="flex flex-col justify-center pl-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl">Equipe E</h1>
            <Link
              to="/integrantes"
              className="flex font-bold items-center gap-1"
            >
              <IoArrowBackCircleOutline className="size-8" />
              Voltar
            </Link>
          </div>
          <hr className="border-2 my-3" />
          <p className="text-2xl font-bold">
            Conheça um pouco mais a Equipe E:
          </p>

          <div className="flex flex-col justify-center items-center gap-10 py-10">
            {/* Card 1 */}
            <div className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6">
              <img
                src="https://github.com/orlando-IDA.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#EA7D44] rounded-[30px] border-[3px] mb-5"
              />

              <h2 className="font-bold text-[32px]">Orlando Gonçalves</h2>
              <p className="text-[#EA7D44] font-bold text-2xl">Desenvolvedor</p>
              <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
              <div className="flex gap-7">
                <Link
                  to="https://github.com/orlando-IDA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                    alt="ícone do GitHub"
                    className=""
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

            {/* Card 2 */}
            <div className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6">
              <img
                src="https://github.com/KiuboHIrata.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#EA7D44] rounded-[30px] border-[3px] mb-5"
              />
              <h2 className="font-bold text-[32px]">Alexandre Hirata</h2>
              <p className="text-[#EA7D44] font-bold text-2xl">Desenvolvedor</p>
              <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
              <div className="flex gap-7">
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
            </div>

            {/* Card 3 */}
            <div className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762102170/photo-git-user_xq1xkd.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#EA7D44] rounded-[30px] border-[3px] mb-5"
              />
              <h2 className="font-bold text-[32px]">Gabriel Martins</h2>
              <p className="text-[#EA7D44] font-bold text-2xl">
                Desenvolvedor Back-end
              </p>
              <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
              <div className="flex gap-7">
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
          </div>
        </section>
        <section className="px-10 py-20">
          <h2>Qual foi o papel da Equipe E durante o projeto?</h2>
          {/* Card tarefa 1 */}
          <div>
            <img src="" alt="" />
            <h2>Página de Cadastro</h2>
            <p>
              Equipe responsável pelo desenvolvimento da página de cadastro de
              conta, implementando o formulário de registro de novos usuários,
              validação dos dados inseridos e integração com o sistema de
              armazenamento das informações.
            </p>
            <Link to="" target="_blank" rel="noopener noreferrer">
              Clique aqui para ver mais
            </Link>
          </div>

          {/* Card tarefa 2 */}
          <div>
            <img src="" alt="" />
            <h2>Página de Produtos</h2>
            <p>
              Desenvolveram também uma página de produtos, que exibe o nome, o
              preço e as informações detalhadas de cada item disponível,
              proporcionando uma visualização clara e organizada para os
              usuários.
            </p>
            <Link to="" target="_blank" rel="noopener noreferrer">
              Clique aqui para ver mais
            </Link>
          </div>
        </section>
      </>
    );
}