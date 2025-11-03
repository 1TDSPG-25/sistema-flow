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
        <section className="flex flex-col justify-center px-[50px] py-[30px]">
            <header className="flex items-center justify-between">
                <h1 className="font-bold text-5xl">Equipe A</h1>
                <Link
                    to="/integrantes"
                    className="flex font-bold items-center gap-1 hover:bg-[rgba(0,0,0,0.1)] duration-300"
                >
                <IoArrowBackCircleOutline className="size-8 bg" />
                    <span className="text-2xl hover:">Voltar</span>
                </Link>
            </header>
            <hr className="my-3" />
            <p className="text-3xl font-bold">
                Conheça um pouco mais a Equipe A:
            </p>

            <ul className="flex justify-between mt-10 px-2.5">
                {CardAlunoData.map((card, index) => (
                    <li
                    key={index} 
                        className="
                        bg-[#C3D5EF] w-[480px] px-10 py-10 
                    flex flex-col border-5 border-[#6D9BDD] 
                    rounded-[30px] gap-3
                    ">
                    <div className="flex justify-center">
                        <img 
                        src={`${card.img}`} 
                        alt="Foto de um usuário do GitHub." 
                        className="w-full border-4 border-[#0077B5] rounded-[20px]"
                        />
                    </div>
                    <h2 className="text-4xl font-bold">{card.nome}</h2>
                    <p className="font-bold text-2xl text-[#0077B5]">{card.tipoDev}</p>

                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="font-bold text-3xl">Redes Sociais:</h3>
                        <ul className="flex justify-between max-w-[90%]">
                            <li>
                                <Link
                                    to={`${card.gitHub}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <figure>
                                    <img
                                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                                        alt="ícone do GitHub"
                                        className=""
                                    />
                                </figure>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`${card.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <figure>
                                    <img
                                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                                        alt="ícone do LinkedIn"
                                    />
                                </figure>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </li>
                ))}
            </ul>
            <h4 
            className="
            font-bold text-4xl 
            mt-[100px] px-2.5">
                Qual foi o papel da Equipe A durante o projeto?
            </h4>
            <ul className="px-2.5 mt-10">
                <li className="bg-[#C3D5EF] border-5 border-[#6D9BDD] rounded-[30px] p-12">
                    <Link 
                    to=""
                    className="flex gap-[100px]"
                    >
                        <figure className="w-[50%]">
                            <img 
                            src="https://res.cloudinary.com/dd5hbmr2v/image/upload/v1762136841/api-e1649279794668-scaled_rl3mfk.webp" 
                            alt="" 
                            className="w-full h-[190px] border-3 border-[#6D9BDD] rounded-[10px]"
                            />
                        </figure>
                        <div className="flex flex-col gap-[15px]">
                            <h5 className="font-semibold text-4xl">
                                API
                            </h5>
                            <p className="w-[90%] text-xl">
                                Equipe A foi responsável pelo desenvolvimento da API da página Home, que tem como objetivo fornecer os dados principais exibidos 
                                logo na entrada do site.
                                Nela, estruturamos os endpoints para gerenciar informações dinâmicas, como textos de apresentação, seções de destaque e dados gerais do projeto.
                                A integração foi feita pensando na escalabilidade e na facilidade de manutenção, 
                                garantindo que futuras atualizações possam ser feitas sem complicar o código.
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
      </>
    );
}