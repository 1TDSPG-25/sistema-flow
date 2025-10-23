
import { useState } from "react";
import type { Unidade } from "../../types/tipoUnidade";

export default function Unidades() {
  const [unidades] = useState<Unidade[]>([]);

  return (
    <main>
      <div className="mx-auto w-full max-w-7xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Unidades das Farmácias
        </h2>

        {unidades.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4">
            {unidades.map((u) => (
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
