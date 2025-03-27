// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import SecretPage from './components/SecretPage/SecretPage.tsx';
import QRCodeGenerator from './components/QRCodeGenerator/QRCodegenertor.tsx';
import { PASSWORD, FECHA_CORRECTA } from './components/utils/constants.ts';
import CredentialsForm from './components/CredencialsForm/CredencialFrom.tsx';


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
    <div className="App">
      {accessGranted ? (
        <SecretPage />
      ) : (
        <div className="container">
          

          {/* Aquí usamos nuestro nuevo componente de formulario */}
          <CredentialsForm onSubmit={handleFormSubmit} />

          {/* Si se ingresaron datos (password y fecha), mostramos el QR */}
          {password && fecha && (
            <QRCodeGenerator password={password} fecha={fecha} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
