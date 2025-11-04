import { useCallback, useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import useTheme from "../../context/useTheme";
import type { Unidade } from "../../types/tipoUnidade";

const API_URL =
  import.meta.env.VITE_API_URL_UNIDADES ||
  `${import.meta.env.BASE_URL}data/db.json`;

export default function Unidades() {
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const { isDark } = theme;

  const fetchUnidades = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, { cache: "no-store" });
      if (!response.ok)
        throw new Error(
          `Erro ao carregar dados de unidades (status ${response.status})`
        );

      const raw = await response.json();
      const unidadesData: Unidade[] = Array.isArray(raw)
        ? raw
        : ((raw?.unidades ?? []) as Unidade[]);

      // small delay so spinner is visible on fast networks
      await new Promise((resolve) => setTimeout(resolve, 300));

      setUnidades(unidadesData);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Erro ao carregar unidades";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUnidades();
  }, [fetchUnidades]);

  const unidadesFiltradas = unidades.filter((u) =>
    `${u.nome} ${u.endereco} ${u.cidade} ${u.uf}`
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  return (
    <main
      className={`transition-colors duration-500 min-h-screen ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`p-8 rounded-xl shadow-md w-full max-w-7xl mx-auto transition-colors duration-500 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 text-center transition-colors duration-500 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Unidades das Farmácias
        </h2>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar unidade (nome, endereço, cidade)..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className={`w-full max-w-md px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-indigo-500 transition-colors duration-500 ${
              isDark
                ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400 focus:ring-indigo-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-indigo-500"
            }`}
          />
        </div>
        {loading ? (
          <div className="flex justify-center py-8">
            <Spinner text="Carregando unidades..." />
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600 mb-4">{`Erro: ${error}`}</p>
            <button
              onClick={() => fetchUnidades()}
              className="bg-[#25D553] text-[#0B3A12] rounded-md px-4 py-2 font-bold"
            >
              Tentar novamente
            </button>
          </div>
        ) : unidadesFiltradas.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {unidadesFiltradas.map((u) => (
              <li key={u.id} className="w-full max-w-[22rem]">
                <div
                  className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
                    isDark
                      ? "border-gray-700 bg-gray-700"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="w-full h-44 overflow-hidden rounded-md mb-4 bg-gray-100 flex items-center justify-center">
                    <img
                      src={u.imagem}
                      alt={u.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold transition-colors duration-500 ${
                      isDark ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {u.nome}
                  </h3>
                  <p
                    className={`mt-2 transition-colors duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {u.endereco} — {u.cidade}/{u.uf}
                  </p>
                  {u.telefone && (
                    <p
                      className={`mt-2 transition-colors duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-medium">Telefone:</span>{" "}
                      {u.telefone}
                    </p>
                  )}
                  {u.horario && (
                    <p
                      className={`transition-colors duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
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
          <p
            className={`text-center mt-4 transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Nenhuma unidade encontrada.
          </p>
        )}
      </div>
    </main>
  );
}
