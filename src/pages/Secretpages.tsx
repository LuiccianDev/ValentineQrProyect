// src/components/SecretPage/SecretPage.tsx
import React, { useState } from "react";

const SecretPage: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      {yesPressed ? (
        <>
          <img
            className="h-48"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="love"
          />
          <div className="text-4xl font-bold text-pink-500 mt-4">
            WOOOOOO!!! I love you pookie!! ;
          </div>
        </>
      ) : (
        <>
          <img
            className="h-48 mb-4"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="love-bear"
          />
          <h1 className="text-4xl font-bold mb-4 text-pink-500">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mr-4 transition-all duration-300"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SecretPage;