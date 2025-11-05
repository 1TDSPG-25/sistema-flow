import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeD() {
  return (
    <>
      <section
        className="flex flex-col justify-center pl-8"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Equipe D</h1>
          <Link
            to="/integrantes"
            className="flex font-bold items-center text-xl gap-1"
          >
            <IoArrowBackCircleOutline className="size-8" />
            Voltar
          </Link>
        </div>
        <hr className="border-2 my-3" />
        <p className="text-2xl font-bold">Conheça um pouco mais a Equipe D:</p>

        <ul
          className="flex flex-col justify-center items-center gap-10 py-10
          lg:flex-row"
        >
          {/* Card 1 */}
          <li className="bg-[#EFEEC3] border-[#DEDA21] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/Asuyz.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#DEDA21] rounded-[30px] border-[3px] mb-5 w-full"
            />

            <h2 className="font-bold text-[32px]">André Emygdio Ferreira</h2>
            <p className="text-[#A19F5A] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/Asuyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/andré-emygdio-ferreira-46bb32219" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>
          </li>

          {/* Card 2 */}
          <li className="bg-[#EFEEC3] border-[#DEDA21] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/JoaooResende.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#DEDA21] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">João Resende</h2>
            <p className="text-[#A19F5A] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/JoaooResende"
                target="_blank"
                rel="noopener noreferrer"
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
                />
              </Link>
            </div>
          </li>

          {/* Card 3 */}
          <li className="bg-[#EFEEC3] border-[#DEDA21] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/lucastdag.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#DEDA21] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Pedro Vaz</h2>
            <p className="text-[#A19F5A] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/lucastdag"
                target="_blank"
                rel="noopener noreferrer"
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
                />
              </Link>
            </div>
          </li>
        </ul>
      </section>
      <section className="pl-8 flex flex-col justify-center items-center gap-10 py-10">
        <h2 className="font-bold text-4xl self-start">
          Qual foi o papel da Equipe D durante o projeto?
        </h2>

        {/* Card tarefa 1 */}
        <div
          className="bg-[#EFEEC3] border-[#DEDA21] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[90%]"
        >
          <div className="lg:flex flex-row lg:gap-8 lg:items-center">
            <img
              src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762137963/pagina-faq_zhgrih.jpg"
              alt="Foto da tela de cadastro de usuário"
              className="bg-[#EFEEC3] border-[#DEDA21] rounded-[10px] border-[3px]lg:w-[30%]
            2xl:w-[20%]"
            />
            <div>
              <h2
                className="font-bold text-4xl mt-5 mb-3 text-center"
              >
                Página de FAQ
              </h2>
              <p
                className="text-2xl mb-10"
              >
                Equipe responsável pelo desenvolvimento da página de cadastro de
                conta, implementando o formulário de registro de novos usuários,
                validação dos dados inseridos e integração com o sistema de
                armazenamento das informações.
              </p>
              <Link
                to="/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EFEEC3] rounded-[10px] text-[#A19F5A] text-2xl text-center font-bold p-2"
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