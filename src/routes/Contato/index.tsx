export default function Contato() {
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
    </section>
  );
}
