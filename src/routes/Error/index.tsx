import { TbError404 } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <main className="min-h-dvh w-full flex items-center justify-center px-4 py-10" aria-labelledby="error-title">
      <section className="w-full max-w-2xl rounded-[1.25rem] p-6 border border-slate-300">
        <div className="flex flex-col items-center gap-2">
          <div aria-hidden>
            <TbError404 className='size-30'/>
          </div>
          <h1 className="text-2xl font-bold">Página não encontrada</h1>
        </div>

        <p className="text-center mt-3 text-slate-600">
          O link pode estar incorreto ou a página foi removida.
          <br />
          Verifique o endereço ou vá para a página inicial.
        </p>

        <div className="mt-4 flex gap-3 justify-center">
          <Link to="/" className="btn btn-primary">Ir para a Home</Link>
        </div>
      </section>
    </main>
  );
}
