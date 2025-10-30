import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaInstagram, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import useTheme from "../../context/useTheme";

export default function Contato() {
  const theme = useTheme();
  const { isDark } = theme;

  const [mensagem, setMensagem] = useState<boolean>(false);
  const [dadosUsuario, setDadosUsuario] = useState<MensagemInput | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);

  const mensagemSchema = z.object({
    nome: z.string().min(2, "Nome deve conter no mínimo 2 caracteres."),
    email: z.email({ message: "Por favor, insira um e-mail válido." }),
    mensagem: z
      .string()
      .min(10, "Mensagem deve conter no mínimo 10 caracteres."),
  });

  type MensagemInput = z.infer<typeof mensagemSchema>;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<MensagemInput>({
    resolver: zodResolver(mensagemSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: MensagemInput) => {
    setDadosUsuario(data);
    setCarregando(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setCarregando(false);
    setMensagem(true);
    reset();
  };

  const fazerOutraPergunta = () => {
    if (dadosUsuario) {
      reset({
        nome: dadosUsuario.nome,
        email: dadosUsuario.email,
        mensagem: ""
      });
    }
    setMensagem(false);
  };

  interface CardsGerais {
    icon: React.ReactNode;
    link: string;
    title: string;
    figcaption: string;
    span: string;
    text: string;
  }

  const cardsSimples: CardsGerais[] = [
    { icon: <FaPhoneAlt size={40} />, link:"", title:"Clique aqui para ver telefones disponíveis", figcaption:"Telefone", span:"Clique aqui", text:"para ver os telefones das farmácias na sua cidade." },
    { icon: <MdOutlineMail size={40} />, link:"", title:"Clique aqui para enviar mensagem", figcaption:"E-mail", span:"E-mail", text:"contato@megafarmadelivery.com.br" },
    { icon: <FaMapMarkedAlt size={40} />, link:"", title:"Clique aqui para ver localizações disponíveis", figcaption:"Localização", span:"Clique aqui", text:"para ver as farmácias disponíveis na sua cidade." }
  ];

  interface RedeSocial {
    icon: React.ReactNode;
    link: string;
    title: string;
  }

  const redesSociais: RedeSocial[] = [
    { icon: <FiFacebook size={30} />, link:"", title:"Clique para visualizar o facebook megafarma" },
    { icon: <FaInstagram size={30} />, link:"", title:"Clique para visualizar o instagram megafarma" },
    { icon: <BsTwitterX size={30} />, link:"", title:"Clique para visualizar o X (Twitter) megafarma" }
  ];

  return (
    <section className={`pb-20 transition-colors duration-500 ${isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"}`}>
      <div
        className={`
          relative bg-[url('https://res.cloudinary.com/dt26mfzpw/image/upload/v1761654366/banner-contato_oowzup.png')] bg-cover bg-center
          py-40 overflow-hidden border-none
          max-[450px]:py-20
        `}
      >
        <div className="relative z-20 flex flex-col items-center gap-7">
          <h1 className={`text-6xl font-bold -mt-20 transition-colors duration-500 ${isDark ? "text-gray-100" : "text-white"}`}>Contate-nos!</h1>
          <p className={`text-2xl w-[38%] text-center max-md:w-[60%] max-sm:text-xl transition-colors duration-500 ${isDark ? "text-gray-300" : "text-white"}`}>
            Precisa de ajuda ou encontrou algum problema? Mande uma mensagem para nós!
          </p>
        </div>

        <div className={`absolute inset-0 ${isDark ? "bg-gray-900" : "bg-white"} [clip-path:polygon(0%_100%,100%_80%,100%_100%,0%_100%)] z-0`}></div>
      </div>

      <div className="px-55 -mt-28 relative z-30 max-xl:px-25 max-lg:px-5 max-md:px-12 max-sm:px-5">
        <div className="flex min-h-80 shadow-lg shadow-gray-400 rounded-2xl max-md:flex max-md:flex-col">
          
          <div className={`rounded-l-2xl w-1/2 max-md:w-full transition-colors duration-500 ${isDark ? "bg-gray-800" : "bg-[#A29DFB]"}`}>
            <div className="flex flex-col gap-4 px-6 py-7">
              <h2 className={`text-4xl font-bold transition-colors duration-500 ${isDark ? "text-gray-100" : "text-white"}`}>Entre em contato</h2>
              <p className={`transition-colors duration-500 ${isDark ? "text-gray-300" : "text-white"}`}>
                Confira abaixo os canais disponíveis para entrar em contato conosco:
              </p>
              <ul className="flex flex-col gap-7">
                {cardsSimples.map((cardsSimples, index) => (
                  <li className="flex" key={index}>
                    <Link 
                      to={cardsSimples.link}
                      className="w-full rounded-2xl bg-[#877dd675] hover:bg-[#8c7efa] duration-300"
                      title={cardsSimples.title}
                    >
                      <figure className="flex items-center gap-3 px-3 py-2">
                        <div className="bg-[#4F39F6] rounded-full p-3 text-white">
                          {cardsSimples.icon}
                        </div>
                        <div className="flex flex-col gap-1 font-bold">
                          <figcaption className="text-2xl text-white">{cardsSimples.figcaption}</figcaption>
                          <p className="text-white">
                            <span className="underline">{cardsSimples.span}</span> {cardsSimples.text}
                          </p>
                        </div>
                      </figure>
                    </Link>
                  </li>
                ))}
              </ul>
              <hr className="text-[#4F39F6]"/>
              <div>
                <h3 className="text-white text-lg font-bold">
                  Siga-nos nas redes sociais!
                </h3>
              </div>
              <ul className="flex">
                {redesSociais.map((rede, index) => (
                  <li className="flex" key={index}>
                    <Link 
                      to={rede.link}
                      className="w-full flex items-center gap-3 px-3 py-2"
                      title={rede.title}
                    >
                      <div className="bg-[#4F39F6] rounded-full p-3 text-white hover:bg-[#7A5AF8] duration-300">
                        {rede.icon}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {!mensagem ? (
            <form onSubmit={handleSubmit(onSubmit)} title="Clique para enviar sua mensagem." className={`rounded-r-2xl w-1/2 flex flex-col justify-center px-10 py-7 max-md:w-full transition-colors duration-500 ${isDark ? "bg-gray-800" : "bg-[#FFFFFF]"}`}>
              <h2 className={`text-3xl font-bold text-center mb-10 transition-colors duration-500 ${isDark ? "text-gray-100" : "text-black"}`}>Envie uma mensagem!</h2>

              <label htmlFor="nome" className={`text-2xl font-bold mb-1 transition-colors duration-500 ${isDark ? "text-gray-200" : "text-black"}`}>Nome:</label>
              <input id="nome" type="text" placeholder="Digite seu nome" className={`border-2 rounded-md p-2 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 w-full transition-colors duration-500 ${isDark ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-black text-black placeholder-gray-400"}`} {...register("nome")}/>
              {errors.nome && (<p className="text-red-500 font-semibold text-sm">{errors.nome.message}</p>)}

              <label htmlFor="email" className={`text-2xl font-bold mb-1 mt-7 transition-colors duration-500 ${isDark ? "text-gray-200" : "text-black"}`}>E-mail:</label>
              <input id="email" type="email" placeholder="Digite seu e-mail" className={`border-2 rounded-md p-2 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 w-full transition-colors duration-500 ${isDark ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-black text-black placeholder-gray-400"}`} {...register("email")}/>
              {errors.email && (<p className="text-red-500 font-semibold text-sm">{errors.email.message}</p>)}

              <label htmlFor="mensagem" className={`text-2xl font-bold mb-1 mt-7 transition-colors duration-500 ${isDark ? "text-gray-200" : "text-black"}`}>Escreva sua mensagem:</label>
              <textarea id="mensagem" placeholder="Digite sua mensagem" className={`resize-none h-[100px] border-2 rounded-md p-2 mb-1 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 w-full transition-colors duration-500 ${isDark ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-black text-black placeholder-gray-400"}`} {...register("mensagem")}></textarea>
              {errors.mensagem && (<p className="text-red-500 font-semibold text-sm">{errors.mensagem.message}</p>)}

              <button
                type="submit" 
                className="bg-[#4F39F6] self-center text-white text-2xl font-semibold mt-7 py-2 rounded-md hover:bg-[#7A5AF8] transition-colors duration-200 w-[40%] cursor-pointer"
              >
                {carregando ? "Enviando..." : "Enviar"}
              </button>
            </form>
          ) : (
            <div className={`w-1/2 flex flex-col justify-center items-center gap-10 px-10 py-7 font-bold rounded-r-2xl max-md:w-full transition-colors duration-500 ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-black"}`}>
              <h4 className="text-4xl text-center max-[870px]:text-3xl">
                Mensagem enviada com sucesso! Obrigado pelo contato.
              </h4>
              <span>
                <img src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1761775582/icon-check_ao22ng.png" alt="Imagem de check com a cor verde" />
              </span>
              <h5 className="text-3xl text-center max-[870px]:text-2xl">Deseja fazer outra pergunta?</h5>
              <ul className="flex justify-around w-full max-[870px]:flex-col max-[870px]:gap-3">
                <li>
                  <button 
                    title="Clique aqui para voltar"
                    onClick={() => {
                      setMensagem(false);
                      reset({
                        nome: "",
                        email: "",
                        mensagem: "",
                      });
                    }}
                    className="p-3 border-3 border-[#4F39F6] rounded-[10px] text-[#4F39F6] text-lg cursor-pointer hover:bg-[#9479ff25] duration-300 max-[870px]:w-full"
                  >
                    Não, obrigado
                  </button>
                </li>
                <li>
                  <button 
                    title="Clique aqui para fazer outra pergunta"
                    onClick={fazerOutraPergunta}
                    className="px-7 py-3 border-3 border-[#4F39F6] rounded-[10px] bg-[#4F39F6] text-[#FFFFFF] text-lg cursor-pointer hover:bg-[#7A5AF8] duration-300 max-[870px]:w-full"
                  >
                    Sim, gostaria
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
