import React, { useState } from "react";
import type { AddItemModalProps } from "../../types/addItemModal";

const AddItemModal: React.FC<AddItemModalProps & { dark?: boolean }> = ({
  open,
  onClose,
  onSubmit,
  fields,
  title = "Adicionar",
  loading = false,
  error = null,
  submitLabel = "Salvar",
  dark = false,
}) => {
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [localError, setLocalError] = useState<string | null>(null);

  React.useEffect(() => {
    if (!open) {
      setValues({});
      setLocalError(null);
    }
  }, [open]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    for (const field of fields) {
      if (field.required && !values[field.name]) {
        setLocalError(`O campo "${field.label}" é obrigatório.`);
        return;
      }
    }
    setLocalError(null);
    await onSubmit(values);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className={`${
          dark
            ? "bg-gray-900 text-gray-100 border border-gray-700"
            : "bg-white text-gray-900 border border-gray-200"
        }
          rounded-xl max-w-2xl w-full min-h-[500px] p-12 shadow-xl flex flex-col justify-between`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4 text-white">{title}</h2>
        <form className="flex flex-col gap-6 flex-1" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label className="text-sm flex flex-col gap-2" key={field.name}>
              {field.label}
              <input
                name={field.name}
                type={field.type}
                value={
                  typeof values[field.name] === "string"
                    ? (values[field.name] as string)
                    : typeof values[field.name] === "number"
                    ? (values[field.name] as number)
                    : ""
                }
                onChange={handleChange}
                required={field.required}
                className={`h-12 px-4 block w-full rounded-md border text-base ${
                  dark
                    ? "border-gray-700 bg-gray-800 text-gray-100"
                    : "border-gray-300 bg-gray-100 text-gray-900"
                }`}
              />
            </label>
          ))}
          {(localError || error) && (
            <div className="text-red-500 text-sm mb-2">
              {localError || error}
            </div>
          )}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-md border ${
                dark
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "border-gray-400 text-gray-700 hover:bg-gray-200"
              } transition`}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 transition`}
            >
              {loading ? "Salvando..." : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
