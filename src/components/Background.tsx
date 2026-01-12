import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Interfaz para definir las propiedades de cada corazón animado
 */
interface Heart {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function ValentineBackground() {
  const [hearts, setHearts] = useState<Heart[]>([])

  // Generar corazones aleatorios al cargar el componente
  useEffect(() => {
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 110, // Posición horizontal aleatoria (%)
      size: Math.random() * (30 - 10) + 20, // Tamaño entre 10px y 30px
      duration: Math.random() * (10 - 5) + 5, // Duración de caída
      delay: Math.random() * 5, // Retraso inicial
      opacity: Math.random() * (0.8 - 0.3) + 0.4, // Opacidad variable
    }))

    const timer = setTimeout(() => {
      setHearts(newHearts)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-linear-to-br bg-[url('/bg.webp')] from-pink-100 via-red-50 to-pink-200 bg-cover bg-fixed bg-no-repeat">
      {/* Capa de brillo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent" />

      {/* Renderizado de corazones animados */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: -50, x: `${heart.x}vw`, opacity: 0, rotate: 0 }}
            animate={{
              y: '110vh',
              opacity: [0, heart.opacity, heart.opacity, 0],
              rotate: 360,
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              width: heart.size,
              height: heart.size,
              filter: 'drop-shadow(0 0 5px rgba(255,182,193,0.5))',
            }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="text-red-500/50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 28.5L14.1 26.75C7.4 20.7 3 16.7 3 11.8C3 7.8 6.1 4.7 10.1 4.7C12.35 4.7 14.5 5.75 16 7.45C17.5 5.75 19.65 4.7 21.9 4.7C25.9 4.7 29 7.8 29 11.8C29 16.7 24.6 20.7 17.9 26.75L16 28.5Z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Decoración en las esquinas */}
      <div className="absolute bottom-0 left-0 hidden p-8 opacity-20 md:block">
        <div className="-mb-32 -ml-32 h-64 w-64 rounded-full border-20 border-pink-300 blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 hidden p-8 opacity-20 md:block">
        <div className="-mt-24 -mr-24 h-48 w-48 rounded-full border-15 border-red-300 blur-2xl" />
      </div>
    </div>
  )
}
