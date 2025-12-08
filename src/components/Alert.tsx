import React, { useState, useEffect } from 'react'

interface AlertProps {
  message: string
  show: boolean
  onClose?: () => void
  duration?: number
}

const Alert: React.FC<AlertProps> = ({ message, show, onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      setIsExiting(false)

      const timer = setTimeout(() => {
        handleClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [show, duration])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      if (onClose) onClose()
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed right-6 bottom-20 z-20 max-w-sm transition-all duration-300 ${
        isExiting ? 'translate-x-full opacity-0' : 'animate-shake translate-x-0 opacity-100'
      }`}
    >
      <div className="rounded-2xl border-2 border-red-400 bg-white p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <img src="/brokeHeart.png" alt="Corazón roto" className="mt-0.5 h-8 w-8 shrink-0" />
          <p className="flex-1 text-sm font-semibold text-red-700">{message}</p>
          <button
            onClick={handleClose}
            className="shrink-0 text-gray-500 transition-colors duration-200 hover:text-red-600"
            aria-label="Cerrar"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Alert
