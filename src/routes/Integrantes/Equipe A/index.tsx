import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { string } from "zod";

interface CardAluno {

}

const CardAlunoData = [
    {
        img:"https://github.com/enricodelesporte.png",
        nome: "Enrico Delesporte",
        tipoDev: "Desenvolvedor Back-End",
        gitHub: "https://github.com/enricodelesporte",
        linkedin: "https://www.linkedin.com/in/enricodelesporte"
     },
    {
        img:"https://github.com/iagoliziero.png",
        nome: "Iago Liziero",
        tipoDev: "Desenvolvedor Fullstack",
        gitHub: "https://github.com/iagoliziero",
        linkedin: "https://www.linkedin.com/in/iagoliziero"
     },
    {
        img:"https://github.com/vitordias1006.png",
        nome: "Vitor Dias",
        tipoDev: "Desenvolvedor Back-End",
        gitHub: "https://github.com/vitordias1006",
        linkedin: "#"
     },
]

export default function EquipeA() {
  return (
    <>
      <section className="flex flex-col justify-center pl-8
        sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Equipe A</h1>
          <Link
            to="/integrantes"
            className="flex font-bold items-center text-xl gap-1"
          >
            <IoArrowBackCircleOutline className="size-8" />
            Voltar
          </Link>
        </div>
        <hr className="border-2 my-3" />
        <p className="text-2xl font-bold">Conheça um pouco mais a Equipe A:</p>

        <ul className="flex flex-col justify-center items-center gap-10 py-10
         lg:flex-row">
          {/* Card 1 */}
          <li className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/enricodelesporte.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#6D9BDD] rounded-[30px] border-[3px] mb-5 w-full"
            />

            <h2 className="font-bold text-[32px]">Enrico Delesporte</h2>
            <p className="text-[#433BE5] font-bold text-2xl">
              Desenvolvedor Back-End
            </p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/enricodelesporte"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/enricodelesporte"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>
          </li>

          {/* Card 2 */}
          <li className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/iagoliziero.png"
              alt="Foto de um usuário do GitHub."
              className="border-[#6D9BDD] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Iago Liziero</h2>
            <p className="text-[#433BE5] font-bold text-2xl">Desenvolvedor Fullstack</p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/iagoliziero"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                  alt="ícone do GitHub"
                />
              </Link>
              <Link 
                to="https://www.linkedin.com/in/iagoliziero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-60 duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                  alt="ícone do LinkedIn"
                />
              </Link>
            </div>
          </li>

          {/* Card 3 */}
          <li className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[30px] border-[3px] p-6">
            <img
              src="https://github.com/vitordias1006.png"
              alt="Foto de um usuário do GitHub."
              className="w-[465px] border-[#6D9BDD] rounded-[30px] border-[3px] mb-5"
            />
            <h2 className="font-bold text-[32px]">Vitor Dias</h2>
            <p className="text-[#433BE5] font-bold text-2xl">
              Desenvolvedor Back-End
            </p>
            <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
            <div className="flex gap-7">
              <Link
                to="https://github.com/vitordias1006"
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
            Qual foi o papel da Equipe A durante o projeto?
          </h2>

          {/* Card tarefa */}
          <div  className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[30px] border-[3px] p-6 mt-10 flex flex-col justify-center items-center w-[91%]
          lg:p-8">
            <div className="lg:flex flex-row lg:gap-8 lg:items-center">
              <img
                src="https://res.cloudinary.com/dd5hbmr2v/image/upload/v1762136841/api-e1649279794668-scaled_rl3mfk.webp"
                alt="Imagem com mensagem escrita API"
                className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[10px] border-[3px]
                lg:w-[35%]
                2xl:w-[20%]"
                />
              <div>
                <h2  className="font-bold text-4xl mt-5 mb-3 text-center
                lg:text-start
                2xl:text-6xl">
                  API
                </h2>
                <p className="text-2xl mb-10
                2xl:text-4xl">
                    Equipe A foi responsável pelo desenvolvimento da API da página Home, que tem como objetivo fornecer os dados principais exibidos 
                    logo na entrada do site.
                    Nela, estruturamos os endpoints para gerenciar informações dinâmicas, como textos de apresentação, seções de destaque e dados gerais do projeto.
                    A integração foi feita pensando na escalabilidade e na facilidade de manutenção, 
                    garantindo que futuras atualizações possam ser feitas sem complicar o código.
                </p>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6D9BDD] rounded-[10px] text-white text-[18px] lg:text-2xl text-center font-bold p-2 
                  hover:bg-[rgba(31,114,238,0.2)] hover:duration-300"
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