// src/App.tsx
import React, { useState } from 'react';
import SecretPage from './pages/Secretpages.tsx';
import CredentialsForm from './pages/CredencialsForms.tsx';
import { PASSWORD, FECHA_CORRECTA } from './const/constants.ts';

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [fecha, setFecha] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleFormSubmit = (pwd: string, date: string) => {
    setPassword(pwd);
    setFecha(date);

    if (pwd === PASSWORD && date === FECHA_CORRECTA) {
      setAccessGranted(true);
    } else {
      setAccessGranted(false);
      setShowQR(true);
    }
  };

  const handleCloseQR = () => {
    setShowQR(false);
    setPassword('');
    setFecha('');
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
        />
      )}
    </div>
  );
};

export default App;