import { useEffect, useState } from "react";
import type { TipoNoticia } from "@/types/tipoNoticia";

const VITE_HOME_URL: string = import.meta.env.VITE_HOME_URL;

export default function Home() {
  const [posts, setPosts] = useState<TipoNoticia[] | null>([]);

  useEffect(() => {

    const fetchApi = async () => {
      try {
        const response = await fetch(`${VITE_HOME_URL}?skip=5&limit=30`);
        if (response.status != 200) {
          throw new Error("Failed to fetch data");
        }
        const data: TipoNoticia[]  = await response.json();
        console.log(data)
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();

    const interval = setInterval(() => fetchApi(), 1000);

    return () => clearInterval(interval);

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
            <article key={post.articles[0].url} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={post.articles[0].urlToImage || 'https://via.placeholder.com/300'}
                alt={post.articles[0].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.articles[0].title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.articles[0].description}</p>
                <p className="text-xs text-gray-500">{`Por ${post.articles[0].author || 'Autor Desconhecido'} | ${new Date(post.articles[0].publishedAt).toLocaleDateString()}`}</p>
                <a
                  href={post.articles[0].url}
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