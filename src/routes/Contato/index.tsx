import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaInstagram, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";

export default function Contato() {

  const [mensagem, setMensagem] = useState<boolean>(false)

  const mensagemSchema = z.object({
    nome: z.string().min(2, "Nome deve conter no mínimo 2 caracteres."),
    email: z.email({ message: "Por favor, insira um e-mail válido." }),
    mensagem: z
      .string()
      .min(10, "Mensagem deve conter no mínimo 10 caracteres."),
  });

  type MensagemInput = z.infer<typeof mensagemSchema>;

  const { register, handleSubmit, formState: { errors }, reset} = useForm<MensagemInput>({
    resolver: zodResolver(mensagemSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    reset();
    setMensagem(true);
  }

  return (
    <section>
      <div
        className="
      relative bg-[url('https://res.cloudinary.com/dt26mfzpw/image/upload/v1761654366/banner-contato_oowzup.png')] bg-cover bg-center
     text-white py-40 overflow-hidden border-none
     max-[450px]:py-20
    "
      >
        <div className="relative z-20 flex flex-col items-center gap-7">
          <h1 className="text-6xl font-bold text-white -mt-20">Contate-nos!</h1>
          <p
            className="
            text-white text-2xl w-[38%] text-center
            max-md:w-[60%] max-sm:text-xl
            "
          >
            Precisa de ajuda ou encontrou algum problema? Mande uma mensagem
            para nós!
          </p>
        </div>

        <div className="absolute inset-0 bg-white [clip-path:polygon(0%_100%,100%_80%,100%_100%,0%_100%)] z-0"></div>
      </div>

      <div className="
      px-60 -mt-28 relative z-30
      max-xl:px-25
      max-lg:px-5
      max-md:px-12
      max-sm:px-5
      ">
        <div className="
        flex min-h-80 shadow-lg shadow-gray-400 rounded-2xl
        max-md:flex max-md:flex-col
        ">
          
          <div className="bg-[#A29DFB] rounded-l-2xl w-1/2 max-md:w-full">
            <div className="flex flex-col gap-4 px-6 py-7">
                <h2 className="text-white text-4xl font-bold">Entre em contato</h2>
                <p className="text-white">
                    Confira abaixo os canais disponíveis para entrar em contato conosco:
                </p>
                  <ul className="flex flex-col gap-7">
                    <li className="flex">
                        <Link 
                        to=""
                        className="w-full rounded-2xl bg-[#877dd675] hover:bg-[#8c7efa] duration-300"
                        title="Clique aqui para ver telefones disponíveis"
                        >
                          <figure className="flex items-center gap-3 px-3 py-2">
                            <div className="bg-[#4F39F6] rounded-full p-3 text-white">
                              <FaPhoneAlt size={40}/>
                            </div>
                            <div className="flex flex-col gap-1 font-bold">
                              <figcaption className="text-2xl text-white">Telefone</figcaption>
                              <p className="text-white">
                                <span className="underline">Clique aqui</span> para ver os telefones das farmácias na sua cidade.
                              </p>
                            </div>
                          </figure>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link 
                        to=""
                        className="w-full rounded-2xl bg-[#877dd675] hover:bg-[#8c7efa] duration-300"
                        title="Clique aqui para enviar mensagem"
                        >
                          <figure className="flex items-center gap-3 px-3 py-2">
                            <div className="bg-[#4F39F6] rounded-full p-3 text-white">
                              <MdOutlineMail size={40} />
                            </div>
                            <div className="flex flex-col gap-1 font-bold">
                              <figcaption className="text-2xl text-white">E-mail</figcaption>
                              <p className="
                              text-white
                              max-[890px]:text-[14px]
                              max-[800px]:text-[12px]
                              max-md:text-[14px]
                              
                              ">
                                contato@megafarmadelivery.com.br
                              </p>
                            </div>
                          </figure>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link 
                        to=""
                        className="w-full rounded-2xl bg-[#877dd675] hover:bg-[#8c7efa] duration-300"
                        title="Clique aqui para ver localizações disponíveis"
                        >
                          <figure className="flex items-center gap-3 px-3 py-2">
                            <div className="bg-[#4F39F6] rounded-full p-3 text-white">
                              <FaMapMarkedAlt size={40}/>
                            </div>
                            <div className="flex flex-col gap-1 font-bold">
                              <figcaption className="text-2xl text-white">Localização</figcaption>
                              <p className="text-white">
                                <span className="underline">Clique aqui</span> para ver as farmácias disponíveis na sua cidade.
                              </p>
                            </div>
                          </figure>
                        </Link>
                    </li>
                </ul>
                <hr className="text-[#4F39F6]"/>
                <div>
                  <h3 className="text-white text-lg font-bold">
                    Siga-nos nas redes sociais!
                  </h3>
                </div>
                <ul className="flex">
                  <li className="flex">
                        <Link 
                        to=""
                        className="w-full flex items-center gap-3 px-3 py-2"
                        title="Clique para visualizar o facebook megafarma"
                        >
                            <div className="
                            bg-[#4F39F6] rounded-full p-3 text-white
                            hover:bg-[#7A5AF8] duration-300
                            ">
                              <FiFacebook  size={30}/>
                            </div>
                        </Link>
                    </li>
                  <li className="flex">
                        <Link 
                        to=""
                        className="w-full flex items-center gap-3 px-3 py-2"
                        title="Clique para visualizar o instagram megafarma"
                        >
                            <div className="
                            bg-[#4F39F6] rounded-full p-3 text-white
                            hover:bg-[#7A5AF8] duration-300
                            ">
                              <FaInstagram   size={30}/>
                            </div>
                        </Link>
                    </li>
                  <li className="flex">
                        <Link 
                        to=""
                        className="w-full flex items-center gap-3 px-3 py-2"
                        title="Clique para visualizar o X (Twitter) megafarma"
                        >
                            <div className="
                            bg-[#4F39F6] rounded-full p-3 text-white
                            hover:bg-[#7A5AF8] duration-300
                            ">
                              <BsTwitterX  size={30}/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
          </div>

          {!mensagem ? (
            <form onSubmit={handleSubmit(onSubmit)} title="Clique para enviar sua mensagem." className="
          bg-[#FFFFFF] rounded-r-2xl w-1/2 flex flex-col justify-center px-10 py-7
          max-md:w-full          
          ">
                <h2 className="text-3xl font-bold text-black text-center mb-10">Envie uma mensagem!</h2>

                <label htmlFor="nome" className="text-black text-2xl font-bold mb-1">Nome:</label>
                <input id="nome" type="text" placeholder="Digite seu nome" className="border-2 border-black rounded-md p-2 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold" {...register("nome")}/>
                {errors.nome && (<p className="text-red-500 font-semibold text-sm">{errors.nome.message}</p>)}

                

                <label htmlFor="email" className="text-black text-2xl font-bold mb-1 mt-7">E-mail:</label>
                <input id="email" type="email" placeholder="Digite seu e-mail" className="border-2 border-black rounded-md p-2 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold" {...register("email")}/>
                {errors.email && (<p className="text-red-500 font-semibold text-sm">{errors.email.message}</p>)}

                

                <label htmlFor="mensagem" className="text-black text-2xl font-bold mb-1 mt-7">Escreva sua mensagem:</label>
                <textarea id="mensagem" placeholder="Digite sua mensagem" className="resize-none h-[100px] border-2 border-black rounded-md p-2 mb-1 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold" {...register("mensagem")}></textarea>
                {errors.mensagem && (<p className="text-red-500 font-semibold text-sm">{errors.mensagem.message}</p>)}
                

                <button type="submit" className="bg-[#4F39F6] self-center text-white text-2xl font-semibold mt-7 py-2 rounded-md hover:bg-[#7A5AF8] transition-colors duration-200 w-[40%] cursor-pointer">Enviar</button>
          </form>
          ) : (

            <div className="
              w-1/2 flex flex-col justify-center items-center gap-10
              px-10 py-7 font-bold bg-[#FFFFFF] rounded-r-2xl 
              max-md:w-full 
            ">
                <h4 className="text-4xl text-center">
                  Mensagem enviada com sucesso! Obrigado pelo contato.
                </h4>
                <span>
                  <img src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1761775582/icon-check_ao22ng.png" alt="Imagem de check com a cor verde" />
                </span>
            </div>

          )}
        </div>
      </div>
    </section>
  );
}
