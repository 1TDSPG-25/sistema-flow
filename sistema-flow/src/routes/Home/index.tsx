import { useEffect, useState } from "react";

interface apiProps {
    id: number;
    quote: string;
    author: string;
}

const Home = () => {

    const [posts, setPosts] = useState<apiProps[]>([]);

    const fetchApi = async () => { 
        const response = await fetch(`${import.meta.env.VITE_API_URL_HOME}`);
        if(response.status !== 200) {
            throw new Error('Failed to fetch data');
        }
        const data: apiProps[] = await response.json();

        setPosts(data);
    }

    useEffect(() => {

        fetchApi();

    }, []);

    return ( <></> );
}
 
export default Home;