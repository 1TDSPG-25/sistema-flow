import React from "react";

interface SpinnerProps {
  text?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ text, className = "" }) => (
  <div className={`flex items-center gap-2 justify-center ${className}`}>
    <span className="inline-block w-5 h-5 mr-2 border-2 border-t-2 border-gray-400 border-t-indigo-500 rounded-full animate-spin"></span>
    {text && <span>{text}</span>}
  </div>
);

export default Spinner;
