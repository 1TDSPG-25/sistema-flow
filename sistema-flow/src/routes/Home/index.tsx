import { useState, useEffect } from "react";

const Home = () => {

    const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    
    setPosts(["Primeiro post", "Segundo post"]);

    const interval = setInterval(() => {
      console.log("Atualizando posts...");
      setPosts((prev) => [...prev, "Novo post " + new Date().toLocaleTimeString()]);
    }, 300000); 

    return () => clearInterval(interval);
  }, []);

    return ( <></> );
}
 
export default Home;