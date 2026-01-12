const romanticPhrases = [
  'Love is the poetry of the senses ❤️',
  'With you, every moment is special 💕',
  'You are my reason to smile every day ✨',
  'True love never fades 💖',
  'Together we write our love story 📖',
  'Your smile lights up my world 🌟',
  'You are my favorite place 🏡',
  'With you, time stands still ⏰',
  'Love that cannot be measured, is felt 💗',
  'You are my always and forever 💫',
]

export default function CarruselFrases() {
  return (
    <div className="overflow-hidden">
      <div className="animate-scroll flex whitespace-nowrap">
        {/* Primera copia de las frases */}
        {romanticPhrases.map((phrase, index) => (
          <span
            key={`phrase-1-${index}`}
            className="inline-block px-8 text-3xl font-semibold text-red-600 italic md:text-base"
          >
            {phrase}
          </span>
        ))}
        {/* Segunda copia para loop infinito */}
        {romanticPhrases.map((phrase, index) => (
          <span
            key={`phrase-2-${index}`}
            className="inline-block px-8 text-3xl font-semibold text-red-600 italic md:text-base"
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  )
}
