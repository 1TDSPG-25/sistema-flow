import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeF() {
  return (
    <>
      <section className="flex flex-col justify-center pl-8
       sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Equipe F</h1>
          <Link
            to="/integrantes"
            className="flex font-bold items-center text-xl gap-1"
          >
            <IoArrowBackCircleOutline className="size-8" />
            Voltar
          </Link>
        </div>
        <hr className="border-2 my-3" />
        <p className="text-2xl font-bold">Conheça um pouco mais a Equipe F:</p>

        <ul className="flex flex-col justify-center items-center gap-10 py-10
        lg:flex-row">
          {/* Card pessoa 1 */}
          <li className="bg-[#DCB2CD] border-[#EF3CB1] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/felipeflosii.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#EF3CB1] rounded-[30px] border-[3px] mb-5 w-full"
            />

            <h2 className="font-bold text-[32px]">Luiz Felipe</h2>
            <p className="text-[#EF3CB1] font-bold text-2xl">
              Desenvolvedor Back-end
            </p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/felipeflosii"
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
                to="https://www.linkedin.com/in/felipeflosii"
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

          {/* Card pessoa 2 */}
          <li className="bg-[#DCB2CD] border-[#EF3CB1] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/thubrito.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#EF3CB1] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Arthur Brito</h2>
            <p className="text-[#EF3CB1] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/thubrito"
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

          {/* Card pessoa 3 */}
          <li className="bg-[#DCB2CD] border-[#EF3CB1] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/PedroBrum-DEV.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#EF3CB1] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Pedro Brum</h2>
            <p className="text-[#EF3CB1] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/PedroBrum-DEV"
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

      <section className="pl-8 flex flex-col justify-center items-center gap-10 py-10">
        <h2 className="font-bold text-4xl self-start">
          Qual foi o papel da Equipe F durante o projeto?
        </h2>

        {/* Card tarefa 1 */}
        <div className="bg-[#DCB2CD] border-[#EF3CB1] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[90%]
        lg:p-8
        2xl:p-10">
          <h2 className="font-bold text-4xl mb-5 text-center
          2xl:text-6xl">
            Componentes principais
        </h2>
          <p className="text-2xl mb-10
          2xl:text-4xl">
            A equipe foi responsável pelo desenvolvimento das partes principais
            do site, como o Cabeçalho, o Rodapé e o Menu de navegação. Além
            disso, criaram uma página exclusiva para o usuário administrador.
          </p>
          <Link to="/home" target="_blank" rel="noopener noreferrer"
          className="bg-[#ef3cb1] rounded-[10px] text-white text-2xl text-center font-bold p-2
          hover:bg-[rgb(177,33,126)] transition duration-300 ease-in-out
          sm:w-[70%]
          md:w-[55%]
          lg:w-[40%]
          2xl:w-[20%]
          2xl:p-3">
            Clique aqui para ver mais
          </Link>
        </div>

        {/* Card tarefa 2 */}
        <div className="bg-[#DCB2CD] border-[#EF3CB1] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[90%]
        2xl:p-10">
          <h2 className="font-bold text-4xl mb-3 text-center 2xl:text-6xl">Correções e aperfeiçoamento</h2>
          <p className="text-2xl
          2xl:text-4xl">
            Realizaram ajustes na página de produtos e implementaram a rota para
            a lista de produtos. Contribuíram também para o “aperfeiçoamento
            geral” do site, realizando correções e melhorias inesperadas nas
            páginas desenvolvidas por outras equipes.
          </p>
        </div>
      </section>
    </>
  );
}
