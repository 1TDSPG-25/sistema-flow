import React from "react";

interface SpinnerProps {
  text?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ text, className = "" }) => (
  <div className={`flex items-center gap-4 justify-center ${className}`}>
    <span className="inline-block w-16 h-16 mr-4 border-4 border-t-4 border-gray-400 border-t-indigo-500 rounded-full animate-spin"></span>
    {text && <span className="text-lg">{text}</span>}
  </div>
);

export default Spinner;
