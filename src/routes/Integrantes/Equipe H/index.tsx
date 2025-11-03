import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeH() {
  return (
    <>
      <section
        className="flex flex-col justify-center pl-8"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Equipe H</h1>
          <Link
            to="/integrantes"
            className="flex font-bold items-center text-xl gap-1"
          >
            <IoArrowBackCircleOutline className="size-8" />
            Voltar
          </Link>
        </div>
        <hr className="border-2 my-3" />
        <p className="text-2xl font-bold">Conheça um pouco mais a Equipe E:</p>

        <ul
          className="flex flex-col justify-center items-center gap-10 py-10"
        >
          {/* Card 1 */}
          <li className="bg-[#E79595] border-[#ED3535] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/yJoaoVictor10.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#ED3535] rounded-[30px] border-[3px] mb-5 w-full"
            />

            <h2 className="font-bold text-[32px]">João Victor</h2>
            <p className="text-[#ED3535] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/yJoaoVictor10"
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
          <li className="bg-[#E79595] border-[#ED3535] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/pedrovaz100.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#ED3535] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Pedro Vaz</h2>
            <p className="text-[#ED3535] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/pedrovaz100"
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
      <section className="pl-8 flex flex-col justify-center items-center gap-10 py-10">
        <h2 className="font-bold text-4xl self-start">
          Qual foi o papel da Equipe E durante o projeto?
        </h2>

        {/* Card tarefa 1 */}
        <div
          className="bg-[#E79595] border-[#ED3535] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[90%]"
        >
          <div>
            <img
              src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762137963/pagina-faq_zhgrih.jpg"
              alt="Foto da tela de cadastro de usuário"
              className="bg-[#E79595] border-[#ED3535] rounded-[10px] border-[3px]"
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
                className="bg-[#ED3535] rounded-[10px] text-white text-2xl text-center font-bold p-2"
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
