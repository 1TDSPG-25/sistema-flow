import { Link } from "react-router-dom";

export default function Integrantes() {
  const IntegrantesData = {
    equipeA: {
      linkPagina: "",
      bgCard: "bg-[#C3D5EF]",
      borderCard: "border-[#2577EF]",
      equipeTitulo: "Equipe A",
      borderImg: "border-[#2577EF]",
      img: [
        "https://github.com/enricodelesporte.png",
        "https://github.com/iagoliziero.png",
        "https://github.com/vitordias1006.png",
      ],
      integrantes: ["Enrico", "Iago", "Vitor"],
      borderBotao: "border-[#0059D8]",
      corTextoBotao: "text-[#0059D8]",
    },
    equipeB: {
      linkPagina: "",
      bgCard: "bg-[#B2DCBD]",
      borderCard: "border-[#25D553]",
      equipeTitulo: "Equipe B",
      borderImg: "border-[#25D553]",
      img: [
        "https://github.com/KelsonZh0.png",
        "https://github.com/alex-isidro.png",
        "https://github.com/PxS00.png",
      ],
      integrantes: ["Kelson", "Alexander", "Lucas"], 
      borderBotao: "border-[#337B45]",
      corTextoBotao: "text-[#337B45]",
    },
    equipeC: {
      linkPagina: "",
      bgCard: "bg-[#E0A5AF]",
      borderCard: "border-[#E42645]",
      equipeTitulo: "Equipe C",
      borderImg: "border-[#E42645]",
      img: [
        "https://github.com/EnzoOkuizumiFiap.png",
        "https://github.com/LuzBGouveia.png",
        "https://github.com/MiltonMarcelino.png",
      ],
      integrantes: ["Enzo", "Lucas", "Milton"],
      borderBotao: "border-[#C7354D]",
      corTextoBotao: "text-[#C7354D]",
    },
  }

    return (
        <section className="flex flex-col gap-15 my-10 px-12">
            <header className="flex flex-col items-center gap-5">
                <h1 className="text-6xl font-bold">Conheça nosso time!</h1>
                <p className="text-3xl">Conheça as equipes que fizeram este projeto acontecer.</p>
            </header>
            <ul className="flex flex-wrap justify-around gap-5">
                {Object.values(IntegrantesData).map((equipe, index) => (
                    <li key={index}>
                        <Link
                        to={equipe.linkPagina}
                        title="Clique aqui para ver a equipe"
                        className={`
                            flex flex-col gap-5 max-w-xl items-center
                            ${equipe.bgCard} rounded-[30px] pt-4 pb-11 px-20
                            border-[3px] ${equipe.borderCard}
                        `}
                        >
                        <h2 className="text-3xl font-bold">{equipe.equipeTitulo}</h2>

                        {/* Fotos */}
                        <figure className="flex items-center mt-5">
                            {equipe.img.map((src, i) => (
                            <div
                                key={i}
                                className={`flex flex-col items-center ${
                                i === 1 ? "-mt-10 -ml-10" : i === 2 ? "-ml-10" : ""
                                }`}
                            >
                                <img
                                src={src}
                                alt={`Foto de ${equipe.integrantes[i]}`}
                                className={`w-[95%] border-4 ${equipe.borderImg} rounded-[20px]`}
                                />
                            </div>
                            ))}
                        </figure>

                        {/* Nomes */}
                        <ul className="flex justify-between gap-3 w-[80%]">
                            {equipe.integrantes.map((nome, i) => (
                            <li key={i}>
                                <h3 className="font-bold text-3xl">{nome}</h3>
                            </li>
                            ))}
                        </ul>

                        {/* Botão */}
                        <Link
                            to={equipe.linkPagina}
                            className={`border-[3px] ${equipe.borderBotao} w-full rounded-[30px]`}
                        >
                            <p className={`text-xl font-bold text-center ${equipe.corTextoBotao} py-2`}>
                            Ver Mais
                            </p>
                        </Link>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}