// src/components/CredentialsForm/CredentialsForm.tsx
import React, { useState } from 'react';
import './CredencialFrom.modeule.css'

interface CredentialsFormProps {
  onSubmit: (password: string, fecha: string) => void;
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Llamamos a la función que viene de App para manejar la validación
    onSubmit(password, fecha);
  };

  return (
    <div>
      <h1>QR Valentín</h1>
      <form onSubmit={handleSubmit} className='formContainer'>
        
        <label htmlFor="password" className='label'>Password:</label>
        <br />
        <input
          className='input'
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Xiang'er"
          required
        />
        <br />

        <label htmlFor="fecha" className='label'>Fecha:</label>
        <br />
        <input
          className='input'
          type="text"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          placeholder="Ej. 21-12-100-"
          required
        />
        <br />

        <button type="submit" className='submitButton'>Generar Código QR</button>
      </form>
    </div>
    
  );
};

export default CredentialsForm;
