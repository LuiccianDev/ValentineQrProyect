import React, { useState, useEffect } from "react";

interface AlertProps {
  message: string;
  show: boolean;
  onClose?: () => void;
  duration?: number;
}

const Alert: React.FC<AlertProps> = ({ message, show, onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsExiting(false);

      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-20 right-6 z-20 max-w-sm transition-all duration-300 ${
        isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0 animate-shake'
      }`}
    >
      <div className="p-4 bg-white border-2 border-red-400 rounded-2xl shadow-2xl">
        <div className="flex items-start gap-3">
          <img 
            src="/brokeHeart.png" 
            alt="Corazón roto" 
            className="w-8 h-8 shrink-0 mt-0.5"
          />
          <p className="text-red-700 font-semibold text-sm flex-1">{message}</p>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-red-600 transition-colors duration-200 shrink-0"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
