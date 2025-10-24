export type apiProps = {
  id?: string;
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source?: {
    id: string | null;
    name: string;
  }; 
};

export type apiResponse = {
  articles: apiProps[];
};
