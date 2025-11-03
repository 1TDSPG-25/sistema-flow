import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeA() {
    return (
      <>
        <section className="flex flex-col justify-center px-[50px] py-[30px]">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-5xl">Equipe A</h1>
                <Link
                    to="/integrantes"
                    className="flex font-bold items-center gap-1 hover:bg-[rgba(0,0,0,0.1)] duration-300"
                >
                <IoArrowBackCircleOutline className="size-8 bg" />
                    <span className="text-2xl hover:">Voltar</span>
                </Link>
            </div>
            <hr className="my-3" />
            <p className="text-3xl font-bold">
                Conheça um pouco mais a Equipe A:
            </p>

            <div className="flex flex-col justify-center items-center gap-10 py-10">
                <ul>
                    <li className="">
                {/* Card 1 */}
                <div className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[30px] border-[3px] p-6">
                    <img
                        src="https://github.com/enricodelesporte.png"
                        alt="Foto de um usuário do GitHub."
                        className="border-[#0077B5] rounded-[30px] border-[3px] mb-5"
                    />

                <h2 className="font-bold text-[32px]">Enrico Delesporte</h2>
                <p className="text-[#0077B5] font-bold text-2xl">Desenvolvedor</p>
                <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
                <div className="flex gap-7">
                    <Link
                        to="https://github.com/enricodelesporte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                            alt="ícone do GitHub"
                            className=""
                        />
                    </Link>
                    <Link 
                        to="https://www.linkedin.com/in/enricodelesporte" 
                        target="_blank" 
                        rel="noopener noreferrer">

                        <img
                            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                            alt="ícone do LinkedIn"
                        />
                    </Link>
                </div>
            </div>

                {/* Card 2 */}
                <div className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[30px] border-[3px] p-6">
                    <img
                        src="https://github.com/iagoliziero.png"
                        alt="Foto de um usuário do GitHub."
                        className="border-[#0077B5] rounded-[30px] border-[3px] mb-5"
                    />
                <h2 className="font-bold text-[32px]">Iago Liziero</h2>
                <p className="text-[#0077B5] font-bold text-2xl">Desenvolvedor Front-End & Back-End</p>
                <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
                <div className="flex gap-7">
                    <Link
                        to="https://github.com/iagoliziero"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                            alt="ícone do GitHub"
                        />
                    </Link>
                    <Link 
                        to="https://www.linkedin.com/in/iagoliziero" 
                        target="_blank" 
                        rel="noopener noreferrer">

                        <img
                            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                            alt="ícone do LinkedIn"
                        />
                    </Link>
                </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#C3D5EF] border-[#6D9BDD] rounded-[30px] border-[3px] p-6"></div>
                    <img
                        src="https://github.com/vitordias1006.png"
                        alt="Foto de um usuário do GitHub."
                        className="border-[#0077B5] rounded-[30px] border-[3px] mb-5"
                    />
                <h2 className="font-bold text-[32px]">Vitor Dias</h2>
                <p className="text-[#0077B5] font-bold text-2xl">
                    Desenvolvedor
                </p>
                <p className="font-bold text-3xl mt-5 mb-3">Redes Sociais:</p>
                <div className="flex gap-7">
                    <Link
                        to="https://github.com/vitordias1006"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                            alt="ícone do GitHub"
                        />
                    </Link>
                    <Link 
                        to="#" 
                        target="_blank" 
                        rel="noopener noreferrer">

                        <img
                            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                            alt="ícone do LinkedIn"
                        />
                    </Link>
                </div>
                </li>
                </ul>  
            </div>
        </section>
        <section className="px-10 py-20">
          <h2>Qual foi o papel da Equipe A durante o projeto?</h2>
          {/* Card tarefa */}
          <div>
            <img src="" alt="" />
            <h2>Bugfix</h2>
            <p>
              Equipe responsável por reformular as rotas e consertar a API da página Home.
            </p>
            <Link 
            to="" 
            target="_blank" 
            rel="noopener noreferrer">
              Clique aqui para ver mais
            </Link>
          </div>
        </section>
      </>
    );
}