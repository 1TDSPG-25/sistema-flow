import { Link } from "react-router-dom";

export default function Integrantes() {
    return (
        <section className="flex flex-col gap-15 my-10 px-12">
            <header className="flex flex-col items-center gap-5">
                <h1 className="text-6xl font-bold">Conheça nosso time!</h1>
                <p className="text-3xl">Conheça as equipes que fizeram este projeto acontecer.</p>
            </header>
            <ul className="flex flex-wrap justify-around gap-5">
                <li>
                    <Link 
                     to=""
                     title="Clique aqui para ver a equipe"
                     className="
                     flex flex-col gap-5 max-w-xl items-center
                     bg-[#C3D5EF] rounded-[30px] pt-4 pb-11 px-20
                     border-3 border-[#2577EF] 
                     "
                    >
                    <h2 className="text-3xl font-bold">Equipe A</h2>
                        <figure className="flex items-center mt-5">
                            <div className="flex flex-col items-center">
                                <img 
                                src="https://github.com/enricodelesporte.png"
                                alt="Uma fotografia do Enrico"
                                className="w-[95%] border-4 border-[#2577EF] rounded-[20px]" />
                            </div>
                            <div className="flex flex-col items-center -mt-10 -ml-10">
                                <img 
                                src="https://github.com/iagoliziero.png"
                                alt="Uma fotografia do Iago"
                                className="w-[95%] border-4 border-[#2577EF] rounded-[20px]" />
                            </div>
                            <div className="flex flex-col items-center -ml-10">
                                <img 
                                src="https://github.com/vitordias1006.png"
                                alt="Uma fotografia do Vitor"
                                className="w-[95%] border-4 border-[#2577EF] rounded-[20px]" />
                            </div>
                        </figure>
                        <ul className="flex justify-between w-[80%]">
                            <li>
                                <h3 className="font-bold text-3xl">Enrico</h3>
                            </li>
                            <li>
                                <h3 className="font-bold text-3xl">Iago</h3>
                            </li>
                            <li>
                                <h3 className="font-bold text-3xl">Vitor</h3>
                            </li>
                        </ul>
                        <Link 
                        to=""
                        className="border-3 border-[#0059D8] w-full rounded-[30px]"
                        >
                         <p className="text-xl font-bold text-center text-[#0059D8] py-2">
                             Ver Mais
                         </p>
                        </Link>
                    </Link>
                </li>
            </ul>
        </section>
    )
}