import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeG() {
  return (
    <>
      <section className="flex flex-col justify-center pl-8
        sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Equipe G</h1>
          <Link
            to="/integrantes"
            className="flex font-bold items-center text-xl gap-1"
          >
            <IoArrowBackCircleOutline className="size-8" />
            Voltar
          </Link>
        </div>
        <hr className="border-2 my-3" />
        <p className="text-2xl font-bold">Conheça um pouco mais a Equipe G:</p>

        <ul className="flex flex-col justify-center items-center gap-10 py-10
         lg:flex-row">
          {/* Card 1 */}
          <li className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/moisesBarsoti.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#433BE5] rounded-[30px] border-[3px] mb-5 w-full"
            />

            <h2 className="font-bold text-[32px]">Moisés Barsoti</h2>
            <p className="text-[#433BE5] font-bold text-2xl">
              Desenvolvedor Fullstack
            </p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/moisesBarsoti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                  className="hover:opacity-60 duration-300"
                />
              </Link>
              <Link
                to="https://github.com/moisesBarsoti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                  className="hover:opacity-60 duration-300"
                />
              </Link>
            </div>
          </li>

          {/* Card 2 */}
          <li className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/sSofia-s.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#433BE5] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Sofia Siqueira</h2>
            <p className="text-[#433BE5] font-bold text-2xl">Designer UI/UX</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/sSofia-s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                  className="hover:opacity-60 duration-300"
                />
              </Link>
              <Link to="" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                  className="hover:opacity-60 duration-300"
                />
              </Link>
            </div>
          </li>

          {/* Card 3 */}
          <li className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/FeKiModesto.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#433BE5] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Felipe Modesto</h2>
            <p className="text-[#433BE5] font-bold text-2xl">
              Desenvolvedor Back-end
            </p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/FeKiModesto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                  className="hover:opacity-60 duration-300"
                />
              </Link>
              <Link to="" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                  className="hover:opacity-60 duration-300"
                />
              </Link>
            </div>
          </li>
        </ul>
      </section>

      <section className="pl-8 flex flex-col justify-center items-center gap-10 pt-20">
          <h2 className="font-bold text-4xl self-start">
            Qual foi o papel da Equipe G durante o projeto?
          </h2>

          {/* Card tarefa 1 */}
          <div  className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6 mt-2 flex flex-col justify-center items-center text-center w-[91%]
          lg:p-8
          2xl:p-13">
            <div className="flex flex-col justify-center items-center
            lg:flex-row lg:text-start
            lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762136079/pagina-contato_skhd3i.jpg"
                alt="Foto da tela de contato"
                className="border-[#433BE5] rounded-[10px] border-[3px]
                md:w-[80%]
                lg:w-[30%]
                2xl:w-[20%]"
                />
              <div>
                <h2  className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-5xl">
                  Página de Contato
                </h2>
                <p className="text-2xl mb-10
                2xl:text-3xl">
                  Desenvolveram um card de informações com telefones, e-mail, e localização.
                  Com acesso também as Redes Sociais da empresa. Um formulário de contato no qual o
                  cliente é capaz de enviar suas mensagens.
                </p>
                <Link
                  to="/contato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#433BE5] rounded-[10px] text-white text-2xl text-center font-bold p-2
                  hover:bg-[rgb(38,31,160)] transition duration-300"
                >
                  Clique aqui para ver mais
                </Link>
              </div>
            </div>
          </div>

          {/* Card tarefa 2 */}
          <div className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col items-center text-center w-[91%]
          2xl:p-13">
            <div className="flex flex-col justify-center items-center
            lg:flex-row lg:text-start
            lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762136387/pagina-integrantes_bsdh09.jpg"
                alt="Foto da tela de integrantes"
                className="border-[#433BE5] rounded-[10px] border-[3px]
                md:w-[80%]
                lg:w-[30%]
                2xl:w-[20%]"
              />
              <div>
                <h2 className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-5xl">
                  Página de Integrantes
                </h2>
                <p className="text-2xl mb-10
                2xl:text-3xl">
                  Desenvolveram uma página apresentando cada integrante que contribuiu para o projeto,
                  com a descrição das atividades realizadas por cada equipe.
                </p>
                <Link
                  to="/integrantes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#433BE5] rounded-[10px] text-white text-2xl text-center font-bold p-2
                  hover:bg-[rgb(38,31,160)] transition duration-300"
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
