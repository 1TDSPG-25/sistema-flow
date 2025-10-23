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
      <div className="mx-auto w-full max-w-7xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Unidades das Farmácias
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar unidade (nome, endereço, cidade)..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {unidadesFiltradas.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4">
            {unidadesFiltradas.map((u) => (
              <li key={u.id} className="border p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{u.nome}</h3>
                <p className="text-gray-600 mt-2">
                  {u.endereco} — {u.cidade}/{u.uf}
                </p>
                {u.telefone && <p className="mt-2">{u.telefone}</p>}
                {u.horario && <p>{u.horario}</p>}
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