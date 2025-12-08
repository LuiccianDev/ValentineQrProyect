// src/App.tsx
import React, { useState } from 'react';
import SecretPage from './pages/Secretpages.tsx';
import CredentialsForm from './pages/AuthPage.tsx';
import { PASSWORD, FECHA_CORRECTA } from './const/constants.ts';

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [fecha, setFecha] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const getHintMessage = (attemptNumber: number): string => {
    const hints = [
      '❌ Intento 1/3 fallido. Pista: Piensa en algo especial entre nosotros... 💭',
      '❌ Intento 2/3 fallido. Pista: Recuerda nuestra fecha más importante... 📅',
      '❌ Último intento fallido. Aquí está tu código QR de todas formas... 💔'
    ];
    return hints[attemptNumber - 1] || hints[2];
  };

  const handleFormSubmit = (pwd: string, date: string) => {
    setPassword(pwd);
    setFecha(date);

    if (pwd === PASSWORD && date === FECHA_CORRECTA) {
      setAccessGranted(true);
      setAttempts(0);
      setErrorMessage('');
    } else {
      setAccessGranted(false);
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setErrorMessage(getHintMessage(newAttempts));

      if (newAttempts >= 3) {
        setShowQR(true);
      }
    }
  };

  const handleCloseQR = () => {
    setShowQR(false);
    setPassword('');
    setFecha('');
    setAttempts(0);
    setErrorMessage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {accessGranted ? (
        <SecretPage />
      ) : (
        <CredentialsForm 
          onSubmit={handleFormSubmit} 
          password={password} 
          fecha={fecha}
          showQR={showQR}
          onCloseQR={handleCloseQR}
          attempts={attempts}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default App;