// src/components/QRCodeGenerator/QRCodeGenerator.tsx
import React from 'react';
import QRCode from 'qrcode';
import styles from './QRCodeGenerator.module.css';
import {MENSAJE} from '../utils/constants.ts'

interface QRCodeGeneratorProps {
  password: string;
  fecha: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ password, fecha }) => {
  const [qrUrl, setQrUrl] = React.useState<string>('');

  React.useEffect(() => {
    const generarQR = async () => {
      if (password && fecha) {
        
        const url = `${MENSAJE} | Enlace : https://example.com/?password=${encodeURIComponent(password)}&codigo_postal=${encodeURIComponent(fecha)}`;
        try {
          const urlGenerada = await QRCode.toDataURL(url, { width: 300 });
          setQrUrl(urlGenerada);
        } catch (error) {
          console.error('Error al generar el código QR:', error);
        }
      }
    };

    generarQR();
  }, [password, fecha]);

  return (
    <div className={styles.qrcode}>
      {qrUrl && <img src={qrUrl} alt="Código QR" />}
    </div>
  );
};

export default QRCodeGenerator;
