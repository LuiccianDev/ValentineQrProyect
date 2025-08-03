// src/App.tsx
import React, { useState } from 'react';
import SecretPage from './pages/Secretpages.tsx';
import QRCodeGenerator from './utils/QrCodegenrator.tsx';
import { PASSWORD, FECHA_CORRECTA } from './const/constants.ts';
import CredentialsForm from './pages/CredencialsForms.tsx';


const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [fecha, setFecha] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const handleFormSubmit = (pwd: string, date: string) => {
    // Guardamos los valores en el estado para pasárselos al QRCodeGenerator
    setPassword(pwd);
    setFecha(date);

    // Validamos
    if (pwd === PASSWORD && date === FECHA_CORRECTA) {
      setAccessGranted(true);
    } else {
      setAccessGranted(false);
      // Opcional: mostrar alerta, etc.
      // alert("Datos incorrectos. Se generará un QR con los datos ingresados.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {accessGranted ? (
        <SecretPage />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          {/* Aquí usamos nuestro nuevo componente de formulario */}
          <CredentialsForm onSubmit={handleFormSubmit} />

          {/* Si se ingresaron datos (password y fecha), mostramos el QR */}
          {password && fecha && (
            <div className="mt-6">
              <QRCodeGenerator password={password} fecha={fecha} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;