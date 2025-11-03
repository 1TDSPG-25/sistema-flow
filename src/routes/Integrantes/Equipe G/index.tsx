import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EquipeG() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1>Equipe G</h1>
        <Link
          to="/integrantes"
          className="flex font-bold items-center text-xl gap-1"
        >
          <IoArrowBackCircleOutline className="size-8" />
          Voltar
        </Link>
      </div>
      <hr className="border-2 my-3" />
      <p>Conheça um pouco mais a Equipe G:</p>

      <ul
        className="flex flex-col justify-center items-center gap-10 py-10"
      >
        {/* Card 1 */}
        <li className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6">
          <img
            src="https://github.com/moisesBarsoti.png"
            alt="Foto de um usuário do GitHub."
            className="border-[#433BE5] rounded-[30px] border-[3px] mb-5 w-full"
          />

          <h2>Moisés Barsoti</h2>
          <p>Desenvolvedor Fullstack</p>
          <p>Redes Sociais:</p>
          <div className="flex gap-7">
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
            <Link to="https://github.com/moisesBarsoti" target="_blank" rel="noopener noreferrer">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1762103088/icon-linkedin_p3uaxp.png"
                alt="ícone do LinkedIn"
              />
            </Link>
          </div>
        </li>

        {/* Card 2 */}
        <li className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6">
          <img
            src="https://github.com/sSofia-s.png"
            alt="Foto de um usuário do GitHub."
            className="border-[#433BE5] rounded-[30px] border-[3px] mb-5"
          />
          <h2>Sofia Siqueira</h2>
          <p>Designer UI/UX</p>
          <p>Redes Sociais:</p>
          <div className="flex gap-7">
            <Link
              to="https://github.com/KiuboHIrata"
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

        {/* Card 3 */}
        <li className="bg-[#B4B2DC] border-[#433BE5] rounded-[30px] border-[3px] p-6">
          <img
            src="https://github.com/FeKiModesto.png"
            alt="Foto de um usuário do GitHub."
            className="border-[#433BE5] rounded-[30px] border-[3px] mb-5"
          />
          <h2>Felipe Modesto</h2>
          <p>
            Desenvolvedor Back-end
          </p>
          <p>Redes Sociais:</p>
          <div className="flex gap-7">
            <Link
              to="https://github.com/ggabmartins"
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
