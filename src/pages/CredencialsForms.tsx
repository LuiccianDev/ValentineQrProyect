// src/components/CredentialsForm/CredentialsForm.tsx
import React, { useState } from "react";

interface CredentialsFormProps {
  onSubmit: (password: string, 
            fecha: string) => void;
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(password.trim(), fecha);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h1 >QR Valentín</h1>

      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Campo: Password */}
        <div className="mb-4">
          <label htmlFor="password" className="label">
            Contraseña:
          </label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="xxxxxxx"
            required
            className="input"
          />
        </div>

        {/* Campo: Fecha */}
        <div className="mb-6">
          <label htmlFor="fecha" className="label">
            Fecha:
          </label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="input"
          />
        </div>

        {/* Botón */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Generar Código QR
          </button>
        </div>
      </form>
    </div>
  );
};

export default CredentialsForm;
