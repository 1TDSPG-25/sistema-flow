export default function Contato() {
  return (
    <section>
      <div className="
      relative bg-[url('https://raw.githubusercontent.com/sSofia-s/sistema-flow-assets/refs/heads/main/banner.jpeg')] bg-cover bg-center
     text-white py-28 overflow-hidden border-none
     max-[450px]:py-20
    "
      >
        <div className="relative z-20 flex flex-col items-center gap-7">
            <h1 className="text-6xl font-bold text-white -mt-10">Contate-nos!</h1>
            <p className="
            text-white text-2xl w-[38%] text-center
            max-md:w-[60%] max-:text-xl

            ">
                Precisa de ajuda ou encontrou algum problema? Mande uma mensagem para nós!
            </p>
        </div>

        <div className="absolute inset-0 bg-white [clip-path:polygon(0_100%,100%_80%,100%_100%,0%_100%)] z-0"></div>
        
      </div>

      <div className="px-80 -mt-20 relative z-30">
        <div className=" flex shadow-lg shadow-gray-400 rounded-2xl">
            <div className="bg-[#A29DFB] rounded-l-2xl w-1/2">Vai Corinthians!</div>

            <form className="bg-[#FFFFFF] rounded-r-2xl w-1/2 flex flex-col justify-center px-10">
                <h2 className="text-3xl font-bold text-black text-center my-6">Envie uma mensagem!</h2>

                <label htmlFor="nome" className="text-black text-2xl font-bold mb-1">Nome:</label>
                <input type="text" placeholder="Digite seu nome" className="border-2 border-black rounded-md p-2 mb-8 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold"/>

                <label htmlFor="email" className="text-black text-2xl font-bold mb-1">E-mail:</label>
                <input type="email" placeholder="Digite seu e-mail" className="border-2 border-black rounded-md p-2 mb-8 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold"/>

                <label htmlFor="mensagem" className="text-black text-2xl font-bold mb-1">Escreva sua mensagem:</label>
                <textarea placeholder="Digite sua mensagem" className="resize-none h-[100px] border-2 border-black rounded-md p-2 mb-8 focus:outline-none focus:border-[#4F39F6] focus:border-b-4 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold "></textarea>

                <button type="submit" className="bg-[#4F39F6] self-center text-white text-2xl font-semibold py-2 rounded-md hover:bg-[#7A5AF8] transition-colors duration-200 w-[30%]">Enviar</button>
            </form>
        </div>
      </div>  

    </section>
  );
}
