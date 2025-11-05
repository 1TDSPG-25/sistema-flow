import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeE() {
    return (
      <>
        <section
          className="flex flex-col justify-center pl-8
        sm:px-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl">Equipe E</h1>
            <Link
              to="/integrantes"
              className="flex font-bold items-center text-xl gap-1"
            >
              <IoArrowBackCircleOutline className="size-8" />
              Voltar
            </Link>
          </div>
          <hr className="border-2 my-3" />
          <p className="text-2xl font-bold">
            Conheça um pouco mais a Equipe E:
          </p>

          <ul
            className="flex flex-col justify-center items-center gap-10 py-10
            md:flex-row
            2xl:gap-20"
          >
            {/* Card 1 */}
            <li className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6">
              <img
                src="https://github.com/orlando-IDA.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#EA7D44] rounded-[30px] border-[3px] mb-5
                xl:w-[400px] xl:h-[350px]
                2xl:w-[430px] 2xl:h-[450px]"
              />

              <h2 className="font-bold text-[32px]">Orlando Gonçalves</h2>
              <p className="text-[#EA7D44] font-bold text-2xl">Desenvolvedor</p>
              <p className="font-bold text-3xl mt-5 mb-3
              md:mt-10 lg:mt-13">Redes Sociais:</p>
              <div className="flex gap-7">
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
            </li>

            {/* Card 2 */}
            <li className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6">
              <img
                src="https://github.com/KiuboHIrata.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#EA7D44] rounded-[30px] border-[3px] mb-5"
              />
              <h2 className="font-bold text-[32px]">Alexandre Hirata</h2>
              <p className="text-[#EA7D44] font-bold text-2xl">Desenvolvedor</p>
              <p className="font-bold text-3xl mt-5 mb-3
              md:mt-9 lg:mt-8">Redes Sociais:</p>
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
            </li>

            {/* Card 3 */}
            <li className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762102170/photo-git-user_xq1xkd.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#EA7D44] rounded-[30px] border-[3px] mb-5"
              />
              <h2 className="font-bold text-[32px]">Gabriel Martins</h2>
              <p className="text-[#EA7D44] font-bold text-2xl">
                Desenvolvedor Back-end
              </p>
              <p className="font-bold text-3xl mt-5 mb-3
              md:mt-0
              lg:mt-11">Redes Sociais:</p>
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
            </li>
          </ul>
        </section>
        <section className="pl-8 flex flex-col justify-center items-center gap-10 pt-20">
          <h2 className="font-bold text-4xl self-start">
            Qual foi o papel da Equipe E durante o projeto?
          </h2>

          {/* Card tarefa 1 */}
          <div className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6 mt-2 flex flex-col justify-center items-center text-center w-[90%]
          lg:p-8
          2xl:p-13">
            <div className="flex flex-col justify-center items-center
            lg:flex-row lg:text-start
            lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762123088/pagina-cadastro_ddigo9.jpg"
                alt="Foto da tela de cadastro de usuário"
                className="bg-[#EFD2C3] border-[#EA7D44] rounded-[10px] border-[3px]
                md:w-[80%]
                lg:w-[30%]
                2xl:w-[20%]"
              />
              <div>
                <h2 className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-5xl">
                  Página de Cadastro
                </h2>
                <p className="text-2xl mb-10
                2xl:text-3xl">
                  Equipe responsável pelo desenvolvimento da página de cadastro
                  de conta, implementando o formulário de registro de novos
                  usuários, validação dos dados inseridos e integração com o
                  sistema de armazenamento das informações.
                </p>
                <Link
                  to="/cadastro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EA7D44] rounded-[10px] text-white text-[15px] text-center font-bold p-2
                  sm:text-xl
                  md:text-2xl
                  lg:w-[30%]
                  2xl:p-3"
                  >
                  Clique aqui para ver mais
                </Link>
              </div>
            </div>
          </div>

          {/* Card tarefa 2 */}
          <div className="bg-[#EFD2C3] border-[#EA7D44] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col items-center text-center w-[90%]
          2xl:p-13">
            <div className="flex flex-col justify-center items-center
            lg:flex-row lg:text-start
            lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762125275/pagina-produtos_o1fuly.jpg"
                alt="Foto da tela de produtos"
                className="bg-[#EFD2C3] border-[#EA7D44] rounded-[10px] border-[3px]
                md:w-[80%]
                lg:w-[30%]
                2xl:w-[20%]"
              />
              <div>
                <h2 className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-5xl">
                  Página de Produtos
                </h2>
                <p className="text-2xl mb-10
                2xl:text-3xl">
                  Desenvolveram também uma página de produtos, que exibe o nome,
                  o preço e as informações detalhadas de cada item disponível,
                  proporcionando uma visualização clara e organizada para os
                  usuários.
                </p>
                <Link
                  to="/produtos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EA7D44] rounded-[10px] text-white text-[15px] text-center font-bold p-2
                sm:text-xl
                md:text-2xl
                lg:w-[30%]
                2xl:p-3"
                >
                  Clique aqui para ver mais
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}