import type { apiResponse } from "@/types/tipoHome";

export const fetchApi = async () => {
    const VITE_HOME_URL: string = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=640bc8279b81411ea70af1879834e3b4';

    try {
      const response = await fetch(`${VITE_HOME_URL}&skip=${Math.floor(Math.random() * 10)}`, { method: "GET" });
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }
      const data: apiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };