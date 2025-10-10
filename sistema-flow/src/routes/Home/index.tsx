import { useEffect, useState } from "react";

interface apiProps {
  id: number;
  quote: string;
  author: string;
  quotes: string;
}

const Home = () => {
  const [posts, setPosts] = useState<apiProps[]>([]);

  const fetchApi = async () => {

    const BASE_URL: string = import.meta.env.VITE_HOME_URL

    console.log(BASE_URL)

    try {
      const response = await fetch(`${BASE_URL}?limit=6&skip=${Math.floor(Math.random() * 10)}`, {method: 'GET'});
      if (response.status != 200) {
        throw new Error("Failed to fetch data");
      }
      const data: any = await response.json();
      console.log(data)
      setPosts(data.quotes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {

     const interval = setInterval(() => fetchApi(), 10000);

    return () => clearInterval(interval);
      
  }, []);

  return (
      <section className="w-full max-w-5xl block m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 justify-center">
         {posts.length > 0 && (
          posts.map((post) => (
          <article key={post.id} className="bg-slate-800 text-white/80 p-6 rounded-lg shadow-lg border border-slate-700 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-4">{post.quote}</h2>
            <p className="text-slate-300">{post.author}</p>
          </article>
        ))
        )}
      </div>
      </section>
     
  );
};
export default Home;
