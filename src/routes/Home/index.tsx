import { useEffect, useState } from "react";
import useTheme from "../../context/useTheme";
import { fetchApi } from "../../services/api-home";
import type { apiProps } from "../../types/tipoHome";

export default function Home() {
  const { isDark } = useTheme();
  const [posts, setPosts] = useState<apiProps[]>([]);

  const fetchGet = async () => {
    const api = await fetchApi();
    if (api) {
      setPosts(api.articles);
    }
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <section
      className={`min-h-screen w-full max-w-5xl mx-auto py-16 px-4 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h2
        className={`text-4xl font-semibold text-center mb-12 transition-colors duration-500 ${
          isDark ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Últimas Notícias sobre Saúde e Bem-Estar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.url}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={post.urlToImage || "https://via.placeholder.com/300"}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 line-clamp-2 transition-colors duration-500 ${
                    isDark ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-sm mb-4 transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {post.description}
                </p>
                <p
                  className={`text-xs transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {`Por ${post.author || "Autor Desconhecido"} | ${new Date(
                    post.publishedAt
                  ).toLocaleDateString()}`}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-medium hover:underline transition-colors duration-300 text-green-500"
                >
                  Leia mais
                </a>
              </div>
            </article>
          ))
        ) : (
          <div
            className={`col-span-3 text-center transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Carregando notícias...
          </div>
        )}
      </div>
    </section>
  );
}
