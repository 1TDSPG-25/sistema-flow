import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeA() {
    return (
        <>
            <section className="px-10">
                <div className="flex">
                    <h1>Equipe A</h1>
                    <Link to="/integrantes" className="flex">
                        <IoArrowBackCircleOutline />
                    Voltar
                    </Link>
                </div>
                    <hr />
                <p>
                    Conheça um pouco mais a Equipe A:
                </p>
            </section>
        </>
    )
}