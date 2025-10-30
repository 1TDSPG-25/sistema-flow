import { useEffect, useState } from "react";

import type { TipoApiProps } from "@/types/tipoApiProps";
import type { TipoNoticia } from "@/types/tipoNoticia";
import { createApiProps } from "../util/utilFunctions";

const VITE_HOME_URL: string = import.meta.env.VITE_HOME_URL;

export default function Home() {
  const [posts, setPosts] = useState<TipoApiProps[] | null>([]);

  useEffect(() => {

    const fetchApi = async () => {
      try {
        const response = await fetch(`${VITE_HOME_URL}?skip=5&limit=30`);
        if (response.status != 200) {
          throw new Error("Failed to fetch data");
        }
        const data: TipoNoticia  = await response.json();
        console.log(data)
        setPosts(data.quotes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();

  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        Últimas Notícias sobre Saúde e Bem-Estar
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts === null ? (
          <div className="col-span-3 text-center text-gray-500">Carregando notícias...</div>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                 <p className="text-sm text-gray-600 mb-4">{post.quote}</p>
                <p className="text-xs text-gray-500">{`Por ${post.author || 'Autor Desconhecido'} | ${new Date(createApiProps(post).data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}`}</p>
                <a
                  href={post.author}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-green-500 hover:underline font-medium"
                >
                  Leia mais
                </a>
              </div>
            </article>
          ))
        )}
      </div>

    </section>
  );
}