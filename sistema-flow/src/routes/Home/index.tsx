const Home = () => {
    return (
        <main>
             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full p-10 justify-center">
                {posts.map((post) => (
                    <article 
                        key={post.id} 
                        className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 
                                   transition-transform duration-300 hover:-translate-y-2">
                        <h2 className="text-2xl font-bold mb-4">{post.quote}</h2>
                        <p className="text-slate-300">{post.author}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}
 
export default Home;