import { Link } from "react-router-dom";

export default function Integrantes() {

  interface EquipeProps {
    linkPagina: string;
    bgCard: string;
    borderCard: string;
    hoverCard?: string;
    equipeTitulo: string;
    borderImg: string;
    img: string[];
    integrantes: string[];
    borderBotao: string;
    corTextoBotao: string;
    tamanhoImg?: string;
  }

  type IntegrantesDataType = Record<string, EquipeProps>;

  const IntegrantesData: IntegrantesDataType  = {
    equipeA: {
      linkPagina: "",
      bgCard: "bg-[#C3D5EF]",
      borderCard: "border-[#2577EF]",
      hoverCard: "rgba(31,114,238,0.1)",
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
      hoverCard: "rgba(28,193,102,0.1)",
      equipeTitulo: "Equipe B",
      borderImg: "border-[#25D553]",
      img: [
        "https://github.com/KelsonZh0.png",
        "https://github.com/alex-isidro.png",
        "https://github.com/PxS00.png",
      ],
      integrantes: ["Kelson", "Alex", "Lucas"], 
      borderBotao: "border-[#337B45]",
      corTextoBotao: "text-[#337B45]",
    },
    equipeC: {
      linkPagina: "",
      bgCard: "bg-[#E0A5AF]",
      borderCard: "border-[#E42645]",
      hoverCard: "rgba(193,72,28,0.1)",
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
    equipeD: {
      linkPagina: "",
      bgCard: "bg-[#EFEEC3]",
      borderCard: "border-[#DEDA21]",
      hoverCard: "rgba(255,247,0,0.1)", 
      equipeTitulo: "Equipe D",
      borderImg: "border-[#DEDA21]",
      img: [
        "https://github.com/Asuyz.png",
        "https://github.com/JoaooResende.png",
        "https://github.com/lucastdag.png",
      ],
      integrantes: ["André", "João", "Lucas"],
      borderBotao: "border-[#A19F5A]",
      corTextoBotao: "text-[#A19F5A]",
    },
    equipeE: {
      linkPagina: "",
      bgCard: "bg-[#EFD2C3]",
      borderCard: "border-[#EA7D44]",
      hoverCard: "rgba(255,174,0,0.2)",
      equipeTitulo: "Equipe E",
      borderImg: "border-[#EA7D44]",
      img: [
        "https://github.com/orlando-IDA.png",
        "https://github.com/KiuboHIrata.png",
        "https://github.com/ggabmartins.png",
      ],
      integrantes: ["Orlando", "Alex", "Gabriel"],
      borderBotao: "border-[#CD632B]",
      corTextoBotao: "text-[#CD632B]",
    },
    equipeF: {
      linkPagina: "",
      bgCard: "bg-[#DCB2CD]",
      borderCard: "border-[#EF3CB1]",
      hoverCard: "rgba(255,0,238,0.2)",
      equipeTitulo: "Equipe F",
      borderImg: "border-[#EF3CB1]",
      img: [
        "https://github.com/felipeflosii.png",
        "https://github.com/thubrito.png",
        "https://github.com/PedroBrum-DEV.png",
      ],
      integrantes: ["Felipe", "Arthur", "Pedro"],
      borderBotao: "border-[#B52783]",
      corTextoBotao: "text-[#B52783]",
    },
    equipeG: {
      linkPagina: "",
      bgCard: "bg-[#B4B2DC]",
      borderCard: "border-[#433BE5]",
      hoverCard: "rgba(69,1,255,0.2)",
      equipeTitulo: "Equipe G",
      borderImg: "border-[#433BE5]",
      img: [
        "https://github.com/moisesBarsoti.png",
        "https://github.com/sSofia-s.png",
        "https://github.com/FeKiModesto.png",
      ],
      integrantes: ["Moisés", "Sofia", "Felipe"],
      borderBotao: "border-[#251DBC]",
      corTextoBotao: "text-[#251DBC]",
    },
    equipeH: {
      linkPagina: "",
      bgCard: "bg-[#E79595]",
      borderCard: "border-[#ED3535]",
      hoverCard: "rgba(209,28,28,0.2)",
      equipeTitulo: "Equipe H",
      borderImg: "border-[#ED3535]",
      img: [
        "https://github.com/yJoaoVictor10.png",
        "https://github.com/pedrovaz100.png",
      ],
      integrantes: ["João", "Pedro"], 
      borderBotao: "border-[#BE2121]",
      corTextoBotao: "text-[#BE2121]",
    },
  }

    return (
        <section className="
        flex flex-col gap-15 my-10 px-12
        max-[916px]:px-0
        max-sm:px-2
        max-2xl:px-18
        ">
            <header className="flex flex-col items-center gap-5">
                <h1 className="text-6xl font-bold max-sm:text-5xl">Conheça nosso time!</h1>
                <p className="text-3xl max-md:text-center">Conheça as equipes que fizeram este projeto acontecer.</p>
            </header>
            <ul className="
            flex flex-wrap justify-around gap-5
            max-md:w-full
            ">
                {Object.values(IntegrantesData).map((equipe, index) => (
                    <li key={index}>
                        <Link
                        to={equipe.linkPagina}
                        title="Clique aqui para ver a equipe"
                        className={`
                            flex flex-col gap-5 max-w-xl items-center
                            ${equipe.bgCard} rounded-[30px] pt-4 pb-11 px-20
                            border-[3px] ${equipe.borderCard}
                            hover:bg-[${equipe.hoverCard}] duration-300
                            max-xl:w-[25rem]
                            max-[916px]:max-w-none max-[916px]:w-full
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
                                className={`
                                     ${
                                        index === Object.values(IntegrantesData).length - 1
                                         ? "w-[74%]"
                                         : "w-[95%]"
                                        }
                                     border-4 ${equipe.borderImg} rounded-[20px]
                                `}
                                />
                            </div>
                            ))}
                        </figure>

                        {/* Nomes */}
                        <ul className={`
                            flex 
                            ${
                                index === Object.values(IntegrantesData).length - 1 
                                ? "justify-around w-[70%]"
                                : "justify-between w-[80%]"
                            }
                            max-xl:w-full
                        `}
                        >
                            {equipe.integrantes.map((nome, i) => (
                            <li key={i}>
                                <h3 className="
                                font-bold text-3xl
                                max-xl:text-2xl                               
                                ">{nome}</h3>
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