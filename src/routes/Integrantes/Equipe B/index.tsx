import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeB() {
  return (
    <>
      <section className="flex flex-col justify-center pl-8 sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Equipe B</h1>
          <Link
            to="/integrantes"
            className="flex font-bold items-center text-xl gap-1"
          >
            <IoArrowBackCircleOutline className="size-8" />
            Voltar
          </Link>
        </div>
        <hr className="border-2 my-3" />
        <p className="text-2xl font-bold">Conheça um pouco mais a Equipe B:</p>

        <ul className="flex flex-col justify-center items-center gap-10 py-10 lg:flex-row">
          {/* Card 1 */}
          <li className="bg-[#B2DCBD] border-[#25D553] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/KelsonZh0.png"
              alt="Foto do Kelson"
              className="border-[#25D553] rounded-[30px] border-[3px] mb-5 w-full"
            />

            <h2 className="font-bold text-[32px]">Kelson Zhang</h2>
            <p className="text-[#337B45] font-bold text-2xl">
              Desenvolvedor Front-end
            </p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/KelsonZh0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/kelson-zhang-211456323/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>
          </li>

          {/* Card 2 */}
          <li className="bg-[#B2DCBD] border-[#25D553] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/alex-isidro.png"
              alt="Foto do Alex"
              className="border-[#25D553] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Alex Isidro</h2>
            <p className="text-[#337B45] font-bold text-2xl">Desenvolvedor</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/alex-isidro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/alexander-dennis-a3b48824b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>
          </li>

          {/* Card 3 */}
          <li className="bg-[#B2DCBD] border-[#25D553] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/PxS00.png"
              alt="Foto do Lucas Rossoni"
              className="border-[#25D553] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Lucas Rossoni</h2>
            <p className="text-[#337B45] font-bold text-2xl">QA / Back-end</p>

            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/PxS00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/lucas-rossoni-dieder-32242a353/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          Qual foi o papel da Equipe B durante o projeto?
        </h2>

        {/* Card tarefa 1 */}
          <div  className="bg-[#B2DCBD] border-[#25D553] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[91%]
          lg:p-8">
            <div className="lg:flex flex-row lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dpdxfunke/image/upload/v1762293908/imagem_2025-11-04_190505051_k3xpvj.png"
                alt="Foto da tela de unidades"
                className="bg-[#B2DCBD] border-[#25D553] rounded-[10px] border-[3px]
                lg:w-[35%]
                2xl:w-[20%]"
                />
              <div>
                <h2  className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-6xl">
                  Página de Unidades
                </h2>
                <p className="text-2xl mb-10
                2xl:text-4xl">
                    Implementaram os cards e o layout responsivo da página de
                Unidades, exibindo endereços e contatos das lojas.
                </p>
                <Link
                  to="/unidades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D553] rounded-[10px] text-white text-[18px] lg:text-2xl text-center font-bold p-2 hover:bg-[rgba(28,193,102,0.2)]"
                >
                  Clique aqui para ver mais
                </Link>
              </div>
            </div>
          </div>

        {/* Card tarefa 2 */}
          <div  className="bg-[#B2DCBD] border-[#25D553] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[91%]
          lg:p-8">
            <div className="lg:flex flex-row lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dpdxfunke/image/upload/v1762294179/imagem_2025-11-04_190936562_qursh3.png"
                alt="Tela de usuário"
                className="bg-[#B2DCBD] border-[#25D553] rounded-[10px] border-[3px]
                lg:w-[35%]
                2xl:w-[20%]"
                />
              <div>
                <h2  className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-6xl">
                  Página do Usuário Comum
                </h2>
                <p className="text-2xl mb-10
                2xl:text-4xl">
                    Desenvolveram a tela do usuário comum, permitindo visualizar e
                editar informações do perfil.
                </p>
                <Link
                  to="/perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D553] rounded-[10px] text-white text-[18px] lg:text-2xl text-center font-bold p-2 hover:bg-[rgba(28,193,102,0.2)]"
                >
                  Clique aqui para ver mais
                </Link>
              </div>
            </div>
          </div>

        {/* Card tarefa 3 */}
          <div  className="bg-[#B2DCBD] border-[#25D553] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[91%]
          lg:p-8">
            <div className="lg:flex flex-row lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dpdxfunke/image/upload/v1762295153/imagem_2025-11-04_192549598_opg4zx.png"
                alt="Componentes Spinner e AddItemModal"
                className="bg-[#B2DCBD] border-[#25D553] rounded-[10px] border-[3px]
                lg:w-[35%]
                2xl:w-[20%]"
                />
              <div>
                <h2  className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-6xl">
                  Componentes reutilizáveis
                </h2>
                <p className="text-2xl mb-10
                2xl:text-4xl">
                    Desenvolveram o componente Spinner (loading
                acessível) e o modal/form AddItemModal para
                adicionar produtos/unidades de forma reutilizável.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card tarefa 4 */}
          <div  className="bg-[#B2DCBD] border-[#25D553] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[91%]
          lg:p-8">
            <div className="lg:flex flex-row lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dpdxfunke/image/upload/v1762293859/imagem_2025-11-04_190415517_dedl54.png"
                alt="Integração com a API Megafarma"
                className="bg-[#B2DCBD] border-[#25D553] rounded-[10px] border-[3px]
                lg:w-[35%]
                2xl:w-[20%]"
                />
              <div>
                <h2  className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-6xl">
                  Integração com API Megafarma (Java)
                </h2>
                <p className="text-2xl mb-10
                2xl:text-4xl">
                    Implementaram a integração com a API Java do projeto Megafarma,
                realizando chamadas, mapeamento de dados e testes de integração.
                </p>
                <Link
                  to="https://github.com/PxS00/megafarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D553] rounded-[10px] text-white text-[18px] lg:text-2xl text-center font-bold p-2 hover:bg-[rgba(28,193,102,0.2)]"
                >
                  Clique aqui para ver integrações
                </Link>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
