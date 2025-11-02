import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeE() {
    return (
      <>
        <section>
          <div className="flex">
            <h1>Equipe E</h1>
            <Link to="/integrantes" className="flex">
              <IoArrowBackCircleOutline />
              Voltar
            </Link>
          </div>
          <hr />
          <p>Conheça um pouco mais a Equipe E:</p>

          <div>
            {/* Card 1 */}
            <div className="bg-[#EFD2C3]">
              <img
                src="https://github.com/orlando-IDA.png"
                alt="Foto de um usuário do GitHub."
              />
              <h2>Orlando Gonçalves</h2>
              <p>Desenvolvedor</p>
              <p>Redes Sociais:</p>
              <Link
                to="https://github.com/orlando-IDA"
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
            
          </div>
        </section>
      </>
    );
}