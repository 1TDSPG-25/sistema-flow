import { useEffect, useState } from "react";
import type { apiProps, apiResponse } from "../../types/tipoHome";

export default function Home(){
const [posts, setPosts] = useState<apiProps[]>([]);

  const fetchApi = async () => {

    const VITE_HOME_URL: string = import.meta.env.VITE_HOME_URL;

    console.log(VITE_HOME_URL)

    try {
      const response = await fetch(`${VITE_HOME_URL}&skip=${Math.floor(Math.random() * 10)}`, {method: 'GET'});
      if (response.status != 200) {
        throw new Error("Failed to fetch data");
      }
      const data: apiResponse = await response.json();
      console.log(data)
      setPosts(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
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
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.url} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={post.urlToImage || 'https://via.placeholder.com/300'}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <p className="text-xs text-gray-500">{`Por ${post.author || 'Autor Desconhecido'} | ${new Date(post.publishedAt).toLocaleDateString()}`}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-green-500 hover:underline font-medium"
                >
                  Leia mais
                </a>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">Carregando notícias...</div>
        )}
      </div>
    </section>
  );
  }