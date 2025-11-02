import { Link } from "react-router-dom";


export default function Integrantes() {
    const IntegrantesData = [
        {
            linkPagina: "",
            bgCard: "C3D5EF",
            borderCard: "2577EF",
            equipeTitulo: "Equipe A",
            borderImg: "2577EF",
            img: [
                "https://github.com/enricodelesporte.png",
                "https://github.com/iagoliziero.png",
                "https://github.com/vitordias1006.png"
            ],
            integrantes: [
                "Enrico",
                "Iago",
                "Vitor"
            ],
            borderBotao: "0059D8",
            corTextoBotao: "0059D8"
        },
    ]
    return (
        <section className="flex flex-col gap-15 my-10 px-12">
            <header className="flex flex-col items-center gap-5">
                <h1 className="text-6xl font-bold">Conheça nosso time!</h1>
                <p className="text-3xl">Conheça as equipes que fizeram este projeto acontecer.</p>
            </header>
            <ul className="flex flex-wrap justify-around gap-5">
                {IntegrantesData.map((equipe, index) => {
                    return (
                        <li key={index}>
                            <Link 
                            to=""
                            title="Clique aqui para ver a equipe"
                            className={`
                            flex flex-col gap-5 max-w-xl items-center
                            bg-[#${equipe.bgCard}] rounded-[30px] pt-4 pb-11 px-20
                            border-3 border-[#${equipe.borderCard}] 
                            `}
                            >
                            <h2 className="text-3xl font-bold">{equipe.equipeTitulo}</h2>
                                <figure className="flex items-center mt-5">
                                    <div className="flex flex-col items-center">
                                        <img 
                                        src={`${equipe.img[0]}`}
                                        alt="Uma fotografia do Enrico"
                                        className={`w-[95%] border-4 border-[#${equipe.borderImg}] rounded-[20px]`} />
                                    </div>
                                    <div className="flex flex-col items-center -mt-10 -ml-10">
                                        <img 
                                        src={`${equipe.img[1]}`}
                                        alt="Uma fotografia do Iago"
                                        className={`w-[95%] border-4 border-[#${equipe.borderImg}] rounded-[20px]`} />
                                    </div>
                                    <div className="flex flex-col items-center -ml-10">
                                        <img 
                                        src={`${equipe.img[2]}`}
                                        alt="Uma fotografia do Vitor"
                                        className={`w-[95%] border-4 border-[#${equipe.borderImg}] rounded-[20px]`} />
                                    </div>
                                </figure>
                                <ul className="flex justify-between w-[80%]">
                                    <li>
                                        <h3 className="font-bold text-3xl">{equipe.integrantes[0]}</h3>
                                    </li>
                                    <li>
                                        <h3 className="font-bold text-3xl">{equipe.integrantes[1]}</h3>
                                    </li>
                                    <li>
                                        <h3 className="font-bold text-3xl">{equipe.integrantes[2]}</h3>
                                    </li>
                                </ul>
                                <Link 
                                to=""
                                className={`border-3 border-[#${equipe.borderBotao}] w-full rounded-[30px]`}
                                >
                                <p className={`text-xl font-bold text-center text-[#${equipe.corTextoBotao}] py-2`}>
                                    Ver Mais
                                </p>
                                </Link>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}