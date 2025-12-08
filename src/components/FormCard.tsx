import React, { useState } from "react";

interface FormCardProps {
  onSubmit: (password: string, fecha: string) => void;
  attempts: number;
  errorMessage: string;
}

const FormCard: React.FC<FormCardProps> = ({ onSubmit, attempts, errorMessage }) => {
  const [password, setPassword] = useState("");
  const [fecha, setFecha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(password.trim(), fecha);
  };

  return (
    <div className="w-full max-w-lg relative z-10 flex flex-col justify-center min-h-[70vh]  ">
      <div className="text-center mb-8">
        <h1 className="text-7xl font-bold text-red-600 mb-3">GENERAR QR</h1>
        <p className="text-gray-700 text-lg">
          Crea un QR especial para tu propuesta de San Valentín.
        </p>
      </div>

      <div className="bg-red-100 rounded-3xl shadow-2xl px-8 py-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="password" className="block font-bold mb-3 text-red-700 text-base ">
              Contraseña
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-red-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-9a6 6 0 0 0-12 0v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V8zm-2 2H8V8a4 4 0 0 1 8 0v2z"/>
                </svg>
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Introduce una contraseña segura."
                required
                className="w-full pl-12 pr-12 py-3 border-2 border-red-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-800 placeholder-gray-500 text-sm bg-red-50 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-red-700 focus:outline-none"
                tabIndex={-1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  {showPassword ? (
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  ) : (
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center my-6 items-center text-red-700">
            <span className="h-px bg-red-200 flex-grow"></span>
            <svg className="h-6 w-12 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 46 20">
              <path d="M45 10H1" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M37 2l8 8-8 8" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M23 18.572c-2.484-2.09-8-6.572-8-10.572C15 4.522 17.522 2 20.5 2c1.838 0 3.486.972 4.5 2.5.215-.29.45-.566.702-.82.12-.12.245-.236.375-.348C26.56 2.92 27.52 2 28.5 2 31.478 2 34 4.522 34 8c0 4-5.516 8.482-8 10.572L23 18.572z" fill="#D1355A" stroke="none" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="h-px bg-red-200 flex-grow"></span>
          </div>

          <div className="mb-6">
            <label htmlFor="fecha" className="block font-bold mb-3 text-red-700 text-base">
              Fecha Especial
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-red-700 pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </span>
              <input
                id="fecha"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-red-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-800 text-sm bg-red-50 shadow-sm [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold text-base py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/>
            </svg>
            Generar Código QR
          </button>
        </form>
      </div>

      <p className="text-center text-gray-950 text-base mt-5 font-bold">
        Este código QR desbloqueará tu propuesta romántica.
      </p>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
    </div>
  );
};

export default FormCard;
