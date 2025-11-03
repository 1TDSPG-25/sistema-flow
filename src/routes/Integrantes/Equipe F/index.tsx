import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeF() {
    return (
        <section>
          <div className="flex items-center justify-between">
            <h1>Equipe F</h1>
            <Link
              to="/integrantes"
              className="flex font-bold items-center text-xl gap-1"
            >
              <IoArrowBackCircleOutline className="size-8" />
              Voltar
            </Link>
          </div>
          <hr className="border-2 my-3" />
          <p>
            Conheça um pouco mais a Equipe F:
          </p>

          <ul
            className="flex flex-col justify-center items-center gap-10 py-10"
          >
            {/* Card pessoa 1 */}
            <li className="bg-[#B4B2DC]">
              <img
                src="https://github.com/felipeflosii.png"
                alt="Foto de um usuário do GitHub."
              />

              <h2>Luiz Felipe</h2>
              <p>Desenvolvedor Back-end</p>
              <p>Redes Sociais:</p>
              <div className="flex gap-7">
                <Link
                  to="https://github.com/felipeflosii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103071/icon-github_ep9pkr.png"
                    alt="ícone do GitHub"
                    className=""
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/felipeflosii" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                    alt="ícone do LinkedIn"
                  />
                </Link>
              </div>
            </li>

            {/* Card pessoa 2 */}
            <li className="bg-[#B4B2DC]">
              <img
                src="https://github.com/thubrito.png"
                alt="Foto de um usuário do GitHub."
              />
              <h2>Alexandre Hirata</h2>
              <p>Desenvolvedor</p>
              <p>Redes Sociais:</p>
              <div className="flex gap-7">
                <Link
                  to="https://github.com/thubrito"
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
            </li>

            {/* Card pessoa 3 */}
            <li className="bg-[#B4B2DC]">
              <img
                src="https://github.com/PedroBrum-DEV.png"
                alt="Foto de um usuário do GitHub."
              />
              <h2>Pedro Brum</h2>
              <p>Desenvolvedor</p>
              <p>Redes Sociais:</p>
              <div className="flex gap-7">
                <Link
                  to="https://github.com/PedroBrum-DEV"
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
            </li>
          </ul>
        </section>
    );
}