// src/components/QRCodeGenerator/QRCodeGenerator.tsx
import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { MENSAJE, USERNAME } from "../const/constants.ts";

interface QRCodeGeneratorProps {
  password: string;
  fecha: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ password, fecha }) => {
  const [qrUrl, setQrUrl] = useState<string>("");

  useEffect(() => {
    let isMounted = true; // Evita errores si el componente se desmonta

    const generarQRCode = async (): Promise<void> => {
      if (!password || !fecha) return;

      const enlace = `https://instagram.com/${encodeURIComponent(USERNAME)}`;
      const contenidoQR = `${MENSAJE} | Enlace : ${enlace}`;

      try {
        const urlGenerada = await QRCode.toDataURL(contenidoQR, { width: 300 });
        if (isMounted) setQrUrl(urlGenerada);
      } catch (error) {
        console.error("Error al generar el código QR:", error);
      }
    };

    generarQRCode();

    return () => {
      isMounted = false; // Limpieza del efecto
    };
  }, [password, fecha]);

  if (!qrUrl) return null;

  return (
    <div className="flex justify-center items-center p-4">
      <img
        src={qrUrl}
        alt="Código QR"
        className="border-4 border-white rounded-lg shadow-lg"
      />
    </div>
  );
};

export default QRCodeGenerator;
