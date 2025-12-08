import React from "react";
import FormCard from "../components/FormCard";
import BackgroundEffects from "../components/BackgroundEffects";
import QRCodeGenerator from "../utils/QrCodegenrator";

interface CredentialsFormProps {
  onSubmit: (password: string, fecha: string) => void;
  password: string;
  fecha: string;
  showQR: boolean;
  onCloseQR: () => void;
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({ onSubmit, password, fecha, showQR, onCloseQR }) => {
  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-red-200 flex items-center justify-center p-4 overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10">
          <FormCard onSubmit={onSubmit} />
        </div>
      </div>

      {showQR && password && fecha && (
        <div 
          className="fixed inset-0 w-full h-full backdrop-blur-lg flex items-center justify-center z-50 animate-fadeIn"
          style={{ backgroundColor: 'rgba(231, 74, 74, 0.33)' }}
          onClick={onCloseQR}
        >
          <div 
            className="relative bg-white rounded-xl shadow-2xl p-10 max-w-md w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <QRCodeGenerator password={password} fecha={fecha} />
          </div>
        </div>
      )}
    </>
  );
};

export default CredentialsForm;
