// src/components/SecretPage/SecretPage.tsx
import React, { useState } from 'react'

const SecretPage: React.FC = () => {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [animationType, setAnimationType] = useState('')
  const yesButtonScale = 1 + noCount * 1.5

  const handleNoClick = () => {
    setNoCount(noCount + 1)
    moveButtonRandomly()
  }

  const moveButtonRandomly = () => {
    const animations = [
      'animate-bounce',
      'animate-wiggle',
      'animate-slide-left',
      'animate-slide-right',
      'animate-spin-move',
      'animate-elastic',
    ]
    
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)]
    const randomX = Math.random() * 200 - 100
    const randomY = Math.random() * 200 - 100
    
    setAnimationType(randomAnimation)
    setNoButtonPosition({ x: randomX, y: randomY })
    
    setTimeout(() => setAnimationType(''), 600)
  }

  const getNoButtonText = () => {
    const phrases = [
      'No',
      'Sure?',
      'Please?',
      'Pretty pls',
      'With sugar?',
      'Pookie pls',
      'PLEASE',
      'But :*(',
      "I'm dying",
      "I'm dead",
      "I'm a ghost",
      'Babe pls',
      ':(((',
      'PLS',
      'Noooo',
      'No :(',
    ]

    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            className="h-48"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="love"
          />
          <div className="mt-4 text-4xl font-bold text-pink-500">
            WOOOOOO!!! I love you pookie!! ;
          </div>
        </>
      ) : (
        <>
          {noCount === 0 && (
            <>
              <img
                className="mb-4 h-48"
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                alt="love-bear"
              />
              <h1 className="mb-4 text-4xl font-bold text-pink-500">Will you be my Valentine?</h1>
            </>
          )}
          <div className="relative flex items-center">
            <button
              className="mr-4 rounded bg-primary px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-primary-dark"
              style={{ transform: `scale(${yesButtonScale})`, zIndex: 1 }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className={`relative rounded bg-red-500 px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-red-700 ${animationType}`}
              style={{ 
                zIndex: 10,
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default SecretPage
