import React from "react";

interface AlertProps {
  message: string;
  show: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-15 right-6 z-20 max-w-sm animate-shake">
      <div className="p-4 bg-white border-2 border-red-400 rounded-2xl shadow-2xl">
        <div className="flex items-start gap-3">
          <svg 
            className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
              clipRule="evenodd" 
            />
          </svg>
          <p className="text-red-700 font-semibold text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
