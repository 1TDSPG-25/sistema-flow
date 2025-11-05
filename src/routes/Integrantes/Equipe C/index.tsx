import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeC() {
    return (
      <>
        <section
          className="flex flex-col justify-center pl-8
        sm:px-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl">Equipe C</h1>
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
            Conheça um pouco mais a Equipe C:
          </p>

          <ul
            className="flex flex-col justify-center items-center gap-10 py-10
          lg:flex-row"
          >
            {/* Card 1 */}
            <li className="bg-[#DCB2B9] border-[#D42A46] rounded-[30px] border-[3px] p-6">
              <img
                src="https://github.com/EnzoOkuizumiFiap.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#D42A46] rounded-[30px] border-[3px] mb-5 w-full"
              />

              <h2 className="font-bold text-[32px]">Enzo Okuizumi</h2>
              <p className="text-[#C7354D] font-bold text-2xl">Desenvolvedor</p>
              <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
              <div className="flex gap-7">
                <Link
                  to="https://github.com/EnzoOkuizumiFiap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 duration-300"
                >
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                    alt="ícone do GitHub"
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/enzo-okuizumi-b60292256" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                    alt="ícone do LinkedIn"
                    className="hover:opacity-60 duration-300"
                  />
                </Link>
              </div>
            </li>

            {/* Card 2 */}
            <li className="bg-[#DCB2B9] border-[#D42A46] rounded-[30px] border-[3px] p-6">
              <img
                src="https://github.com/LuzBGouveia.png"
                alt="Foto de um usuário do GitHub."
                className="border-[#D42A46] rounded-[30px] border-[3px] mb-5"
              />
              <h2 className="font-bold text-[32px]">Lucas Barros</h2>
              <p className="text-[#C7354D] font-bold text-2xl">Desenvolvedor</p>
              <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
              <div className="flex gap-7">
                <Link
                  to="https://github.com/LuzBGouveia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 duration-300"
                >
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                    alt="ícone do GitHub"
                  />
                </Link>
                <Link to="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                    alt="ícone do LinkedIn"
                    className="hover:opacity-60 duration-300"
                  />
                </Link>
              </div>
            </li>

            {/* Card 3 */}
            <li className="bg-[#DCB2B9] border-[#D42A46] rounded-[30px] border-[3px] p-6">
              <img
                src="https://github.com/MiltonMarcelino.png"
                alt="Foto de um usuário do GitHub."
                className="w-[465px] h-[435px] border-[#D42A46] rounded-[30px] border-[3px] mb-5"
              />
              <h2 className="font-bold text-[32px]">Milton Marcelino</h2>
              <p className="text-[#C7354D] font-bold text-2xl">
                Desenvolvedor
              </p>
              <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
              <div className="flex gap-7">
                <Link
                  to="https://github.com/MiltonMarcelino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 duration-300"
                >
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                    alt="ícone do GitHub"
                  />
                </Link>
                <Link to="#" target="_blank" rel="noopener noreferrer">
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
            Qual foi o papel da Equipe C durante o projeto?
          </h2>

          {/* Card tarefa 1 */}
          <div className="bg-[#DCB2B9] border-[#D42A46] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[90%]
          lg:p-8
          2xl:p-13">
            <div className="lg:flex flex-row
            lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dd5hbmr2v/image/upload/v1762310575/download_hgwm3u.jpg"
                alt="Foto da tela de cadastro de usuário"
                className="bg-[#DCB2B9] border-[#D42A46] rounded-[10px] border-[3px]
                w-full
                2xl:w-[50%]"
              />
              <div>
                <h2 className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-6xl">
                  Feature
                </h2>
                <p className="text-2xl mb-10
                2xl:text-4xl">
                  Foi adicionada a senha à entidade TipoUser, ampliando a segurança e permitindo autenticação adequada dos usuários. E A página de Login foi ajustada 
                  para seguir o padrão visual e funcional do projeto, garantindo consistência na interface e melhor experiência do usuário.
                </p>
                <Link
                  to="/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D42A46] rounded-[10px] text-white text-[18px] lg:text-2xl text-center font-bold p-2 
                  hover:bg-[rgba(193,72,28,0.2)] hover:duration-300"
                >
                  Clique aqui para ver mais
                </Link>
              </div>
            </div>
          </div>

          {/* Card tarefa 2 */}
          <div className="bg-[#DCB2B9] border-[#D42A46] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[90%]
          lg:p-8
          2xl:p-13">
            <div className="lg:flex flex-row lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dd5hbmr2v/image/upload/v1762136841/api-e1649279794668-scaled_rl3mfk.webp"
                alt="Foto da tela de produtos"
                className="bg-[#DCB2B9] border-[#D42A46] rounded-[10px] border-[3px]
                lg:w-[30%]
                2xl:w-[20%]"
              />
              <div>
                <h2 className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-6xl">
                  BugFix e Fix
                </h2>
                <p className="text-2xl mb-10
                2xl:text-4xl">
                  O Zod foi centralizado, otimizando a validação de dados e facilitando a manutenção do código. A API da página Home foi corrigida, 
                  restabelecendo a comunicação correta entre o front-end e o back-end.
                </p>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D42A46] rounded-[10px] text-white text-[18px] lg:text-2xl text-center font-bold p-2 
                  hover:bg-[rgba(193,72,28,0.2)] hover:duration-300"
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