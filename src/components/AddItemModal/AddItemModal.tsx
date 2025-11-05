import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import type { AddItemModalProps } from "../../types/addItemModal";

function AddItemModal({
  open,
  onClose,
  onSubmit,
  fields,
  title = "Adicionar",
  loading = false,
  error = null,
  submitLabel = "Salvar",
  dark = false,
}: AddItemModalProps & { dark?: boolean }) {
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setValues({});
      setLocalError(null);
    }
  }, [open]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target as HTMLInputElement & {
        value: string;
      };
      setValues((prev) => ({
        ...prev,
        [name]: type === "number" ? parseFloat(value) : value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      for (const field of fields) {
        if (field.required && !values[field.name]) {
          setLocalError(`O campo "${field.label}" é obrigatório.`);
          return;
        }
      }
      setLocalError(null);
      await onSubmit(values);
    },
    [fields, values, onSubmit]
  );

  useEffect(() => {
    if (open) {
      const firstInput = document.querySelector("#add-item-modal input");
      if (firstInput) (firstInput as HTMLElement).focus();
    }
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      id="add-item-modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start md:items-center justify-center p-4 z-50 overflow-auto"
      onClick={onClose}
    >
      <div
        className={`${
          dark
            ? "bg-gray-900 text-gray-100 border border-gray-700"
            : "bg-white text-gray-900 border border-gray-200"
        } rounded-xl w-full max-w-2xl max-h-[90vh] p-6 md:p-12 shadow-xl flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          className={`text-lg font-semibold mb-4 ${
            dark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
        <form
          className="flex flex-col gap-6 flex-1 overflow-y-auto no-scrollbar"
          onSubmit={handleSubmit}
        >
          {fields.map((field) => (
            <label className="text-sm flex flex-col gap-2" key={field.name}>
              {field.label}
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={
                    typeof values[field.name] === "string"
                      ? (values[field.name] as string)
                      : ""
                  }
                  onChange={handleChange}
                  required={field.required}
                  className={`min-h-[120px] px-4 py-2 block w-full rounded-md border text-base ${
                    dark
                      ? "border-gray-700 bg-gray-800 text-gray-100"
                      : "border-gray-300 bg-gray-100 text-gray-900"
                  } resize-y`}
                />
              ) : (
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
              )}
            </label>
          ))}
          {(localError || error) && (
            <div className="text-red-500 text-sm mb-2">
              {localError || error}
            </div>
          )}
          <div className="flex justify-end gap-4 mt-4 md:mt-8">
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
    </div>,
    document.body
  );
}

export default AddItemModal;
