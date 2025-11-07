import type { apiResponse } from "@/types/tipoHome";

// Mock data como fallback
const mockData: apiResponse = {
  articles: [
    {
      title: "Bem-vindo à Megafarma!",
      author: "Equipe Megafarma",
      description:
        "Sua farmácia online de confiança. Encontre os melhores produtos para sua saúde e bem-estar.",
      url: "#",
      urlToImage:
        "https://via.placeholder.com/400x300/4F39F6/ffffff?text=Megafarma",
      publishedAt: new Date().toISOString(),
    },
    {
      title: "Promoções Especiais",
      author: "Marketing Megafarma",
      description:
        "Confira nossas ofertas exclusivas em medicamentos e produtos de saúde.",
      url: "#",
      urlToImage:
        "https://via.placeholder.com/400x300/7A5AF8/ffffff?text=Promocoes",
      publishedAt: new Date().toISOString(),
    },
    {
      title: "Dicas de Saúde",
      author: "Dr. Megafarma",
      description:
        "Acompanhe nossas dicas diárias para uma vida mais saudável e equilibrada.",
      url: "#",
      urlToImage:
        "https://via.placeholder.com/400x300/A29DFB/ffffff?text=Saude",
      publishedAt: new Date().toISOString(),
    },
  ],
};

const CACHE_KEY = "megafarma_home_articles";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hora

interface CachedData {
  data: apiResponse;
  timestamp: number;
}

// Verificar se o cache é válido
const isCacheValid = (cachedItem: CachedData): boolean => {
  return Date.now() - cachedItem.timestamp < CACHE_DURATION;
};

// Buscar do cache
const getFromCache = (): apiResponse | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const cachedItem: CachedData = JSON.parse(cached);

    if (isCacheValid(cachedItem)) {
      console.log("✅ Dados carregados do cache");
      return cachedItem.data;
    }

    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch {
    return null;
  }
};

// Salvar no cache
const saveToCache = (data: apiResponse): void => {
  try {
    const cachedItem: CachedData = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cachedItem));
    console.log("💾 Dados salvos no cache");
  } catch (error) {
    console.error("Erro ao salvar cache:", error);
  }
};

export const fetchApi = async (): Promise<apiResponse> => {
  // Tenta buscar do cache primeiro
  const cachedData = getFromCache();
  if (cachedData) return cachedData;

  // Se não houver cache, faz requisição
  const VITE_HOME_URL = import.meta.env.VITE_HOME_URL as string;

  try {
    console.log("🌐 Fazendo requisição para API...");
    const response = await fetch(VITE_HOME_URL, { method: "GET" });

    if (response.status !== 200) {
      console.warn("⚠️ API retornou erro, usando dados mock");
      saveToCache(mockData);
      return mockData;
    }

    const data: apiResponse = await response.json();
    saveToCache(data);
    return data;
  } catch (error) {
    console.error("❌ Erro ao buscar dados:", error);
    saveToCache(mockData);
    return mockData;
  }
};
