import { useEffect, useState } from "react";
import type { Unidade } from "../../types/tipoUnidade";

const API_URL =
  import.meta.env.VITE_API_URL_UNIDADES ||
  `${import.meta.env.BASE_URL}data/db.json`;

export default function Unidades() {
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchUnidades = async () => {
      try {
        const response = await fetch(API_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Erro ao carregar dados de unidades");

        const raw = await response.json();
        const unidadesData: Unidade[] = Array.isArray(raw)
          ? raw
          : ((raw?.unidades ?? []) as Unidade[]);

        // delay opcional (consistente com Produtos)
        await new Promise((resolve) => setTimeout(resolve, 500));

        setUnidades(unidadesData);
      } catch (error: unknown) {
        alert(
          error instanceof Error
            ? "Erro ao carregar unidades: " + error.message
            : "Erro ao carregar unidades"
        );
      }
    };
    fetchUnidades();
  }, []);
  const unidadesFiltradas = unidades.filter((u) =>
    `${u.nome} ${u.endereco} ${u.cidade} ${u.uf}`
      .toLowerCase()
      .includes(busca.toLowerCase())
  );
  return (
    <main>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Unidades das Farmácias
        </h2>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar unidade (nome, endereço, cidade)..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {unidadesFiltradas.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {unidadesFiltradas.map((u) => (
              <li key={u.id} className="w-full max-w-[22rem]">
                <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-full h-44 overflow-hidden rounded-md mb-4 bg-gray-100 flex items-center justify-center">
                    <img
                      src={u.imagem}
                      alt={u.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{u.nome}</h3>
                  <p className="text-gray-600 mt-2">
                    {u.endereco} — {u.cidade}/{u.uf}
                  </p>
                  {u.telefone && (
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Telefone:</span> {u.telefone}
                    </p>
                  )}
                  {u.horario && (
                    <p className="text-gray-700">
                      <span className="font-medium">Horário:</span> {u.horario}
                    </p>
                  )}
                  {u.localizacao && (
                    <div
                      className="mt-3 w-full overflow-hidden rounded-md"
                      dangerouslySetInnerHTML={{ __html: u.localizacao }}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center mt-4">
            Nenhuma unidade encontrada.
          </p>
        )}
      </div>
    </main>
  );
}