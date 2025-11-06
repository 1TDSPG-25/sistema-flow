import { useEffect } from "react";
import { FiAlertCircle, FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";
import type { ToastProps } from "../../types/toast";

export default function Toast({
  message,
  type,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <FiCheckCircle className="w-6 h-6" />,
    error: <FiXCircle className="w-6 h-6" />,
    warning: <FiAlertCircle className="w-6 h-6" />,
  };

  const colors = {
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  };

  const iconColors = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-yellow-500",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 min-w-[320px] max-w-md p-4 rounded-lg border shadow-lg animate-slide-in ${colors[type]}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className={iconColors[type]}>{icons[type]}</div>
        <div className="flex-1">
          <p className="text-sm font-medium leading-relaxed">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Fechar notificação"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
