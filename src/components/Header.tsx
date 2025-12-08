import React from 'react'

const romanticPhrases = [
  'El amor es la poesía de los sentidos ❤️',
  'Contigo, cada momento es especial 💕',
  'Eres mi razón de sonreír cada día ✨',
  'El amor verdadero nunca se desvanece 💖',
  'Juntos escribimos nuestra historia de amor 📖',
  'Tu sonrisa ilumina mi mundo 🌟',
  'Eres mi lugar favorito 🏡',
  'Contigo el tiempo se detiene ⏰',
  'Amor que no se mide, se siente 💗',
  'Eres mi siempre y para siempre 💫',
]

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 overflow-hidden bg-white/50 shadow-md">
      <div className="relative py-2">
        <div className="animate-scroll flex whitespace-nowrap">
          {/* Primera copia de las frases */}
          {romanticPhrases.map((phrase, index) => (
            <span
              key={`phrase-1-${index}`}
              className="inline-block px-8 text-sm font-semibold text-red-600 italic md:text-base"
            >
              {phrase}
            </span>
          ))}
          {/* Segunda copia para loop infinito */}
          {romanticPhrases.map((phrase, index) => (
            <span
              key={`phrase-2-${index}`}
              className="inline-block px-8 text-sm font-semibold text-red-600 italic md:text-base"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
