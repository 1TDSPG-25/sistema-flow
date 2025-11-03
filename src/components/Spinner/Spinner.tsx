import type { SpinnerProps } from "../../types/spinner";

export default function Spinner({ text, className = "", size = 64 }: SpinnerProps) {
  return (
    <div
      className={`flex items-center gap-4 justify-center ${className}`}
      role="status"
      aria-label={text || "Carregando"}
    >
      <span
        className="inline-block mr-4 border-4 border-t-4 border-gray-400 border-t-indigo-500 rounded-full animate-spin"
        style={{ width: size, height: size }}
      >
        <span className="sr-only">{text || "Carregando"}</span>
      </span>
      {text && <span className="text-lg">{text}</span>}
    </div>
  );
}


