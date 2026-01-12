import { motion } from 'motion/react'

export default function ValentineQRTitle() {
  return (
    <div className="relative w-full py-1 font-great-vibes">
      {/* Título Principal con animación de color y flotación */}
      <motion.h1
        className="relative z-10 text-center text-8xl font-normal select-none"
        style={{
          fontFamily: "'Great Vibes', cursive",
          display: 'block',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
          color: ['#c9184a', '#ec1717', '#ec1717', '#c9184a'],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          color: { duration: 6, repeat: Infinity },
        }}
      >
        Valentine QR
      </motion.h1>
    </div>
  )
}
