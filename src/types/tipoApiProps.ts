export type TipoApiProps = {
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

