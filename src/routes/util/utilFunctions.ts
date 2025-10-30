// Importa o tipo principal a partir de um caminho relativo.

import type { TipoApiProps } from "@/types/tipoApiProps";


// Define o tipo para os parâmetros da função de criação.
// A propriedade 'data' é opcional.
type CreateApiPropsParams = {
  id: string;
  title: string;
  author: string;
  quote: string;
  data?: Date;
};

// Função para gerar uma data aleatória em um intervalo.
const getRandomDate = (start: Date, end: Date): Date => {
  const startTime = start.getTime();
  const endTime = end.getTime();

  // A lógica correta é subtrair o início do fim para obter um intervalo positivo.
  const timeRange = endTime - startTime;

  const randomTimeOffset = Math.random() * timeRange;

  const randomTimestamp = startTime + randomTimeOffset;

  return new Date(randomTimestamp);
};

// Exporta a função com o nome corrigido: createApiProps
export const createApiProps = (params: CreateApiPropsParams): TipoApiProps => {
  const startDate = new Date(2023, 0, 1);
  const endDate = new Date();

  // Se params.data não for fornecido, gera uma data aleatória.
  const finalData = params.data ?? getRandomDate(startDate, endDate);

  return { ...params, data: finalData };
};

