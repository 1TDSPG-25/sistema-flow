import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Contato() {
  const mensagemSchema = z.object({
    nome: z.string().min(2, "Nome deve conter no mínimo 2 caracteres."),
    email: z.email({ message: "Por favor, insira um e-mail válido." }),
    mensagem: z.string().min(10, "Mensagem deve conter no mínimo 10 caracteres.")
  });

  type MensagemInput = z.infer<typeof mensagemSchema>;
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MensagemInput>({
          resolver: zodResolver(mensagemSchema),
          mode: "onChange",
    });


  return (
    <section>
      <div className="
      relative bg-[url('https://raw.githubusercontent.com/sSofia-s/sistema-flow-assets/refs/heads/main/banner.jpeg')] bg-cover bg-center
     text-white py-28 overflow-hidden
    "
      >
        <div className="relative z-20 flex flex-col items-center gap-7">
            <h1 className="text-6xl font-bold text-white -mt-10">Contate-nos!</h1>
            <p className="text-white text-2xl w-[38%] text-center">
                Precisa de ajuda ou encontrou algum problema? Mande uma mensagem para nós!
            </p>
        </div>

        <div className="absolute inset-0 bg-white [clip-path:polygon(0_100%,100%_80%,100%_100%,0%_100%)] z-0"></div>
        
      </div>

      <div className="px-80 -mt-20 relative z-30">
        <div className=" flex shadow-lg shadow-gray-400 rounded-2xl overflow-hidden">
            <div className="bg-[#A29DFB] text-white w-1/2 flex flex-col justify-center px-10 py-12 rounded-l-2xl">
            <h2 className="text-4xl font-bold mb-4 text-left">Entre em Contato</h2>
            <p className="text-lg text-left mb-8">
                Confira abaixo os canais disponíveis para entrar em contato conosco:
            </p>

            {/* Card de Contato */}
            <div className="flex flex-col gap-4">

                {/* Telefone */}
                <div className="bg-[#8F85F5 rounded-xl p-4 shadow-md shadow-purple-300">
                    <div className="text-left">
                        <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                        <a href="#" className="underline text-sm hover:text-gray-200 transition">
                            Clique aqui para ver os telefones das farmácias na sua cidade.
                        </a>
                    </div>
                </div>
                
            </div>

            </div>

            <form onSubmit={handleSubmit(onsubmit)} className="bg-[#FFFFFF] rounded-r-2xl w-1/2 flex flex-col justify-center px-10">
                <h2 className="text-3xl font-bold text-black text-center my-6">Envie uma mensagem!</h2>

                <label htmlFor="nome" className="text-black text-2xl font-bold mb-1">Nome:</label>
                <input id="nome" type="text" placeholder="Digite seu nome" className="border-2 border-black rounded-md p-2 mb-2 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold" {...register("nome")}/>
                {errors.nome && (<p className="text-red-500 font-semibold text-sm mb-4">{errors.nome.message}</p>)}

                

                <label htmlFor="email" className="text-black text-2xl font-bold mb-1 mt-5">E-mail:</label>
                <input id="email" type="email" placeholder="Digite seu e-mail" className="border-2 border-black rounded-md p-2 mb-2 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold" {...register("email")}/>
                {errors.email && (<p className="text-red-500 font-semibold text-sm mb-4">{errors.email.message}</p>)}

                

                <label htmlFor="mensagem" className="text-black text-2xl font-bold mb-1">Escreva sua mensagem:</label>
                <textarea id="mensagem" placeholder="Digite sua mensagem" className="resize-none h-[100px] border-2 border-black rounded-md p-2 mb-2 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold" {...register("mensagem")}></textarea>
                {errors.mensagem && (<p className="text-red-500 font-semibold text-sm mb-4">{errors.mensagem.message}</p>)}
                

                <button type="submit" className="bg-[#4F39F6] self-center text-white text-2xl font-semibold py-2 rounded-md hover:bg-[#7A5AF8] transition-colors duration-200 w-[30%]">Enviar</button>
            </form>
        </div>
      </div>  

    </section>
  );
}
