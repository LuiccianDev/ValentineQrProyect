import React from "react";
import FormCard from "../components/FormCard";
import BackgroundEffects from "../components/BackgroundEffects";
import QRCodeGenerator from "../components/QrCodegenrator";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

interface CredentialsFormProps {
  onSubmit: (password: string, secretKey: string) => void;
  password: string;
  secretKey: string;
  showQR: boolean;
  onCloseQR: () => void;
  attempts: number;
  errorMessage: string;
  onCloseAlert: () => void;
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({ 
  onSubmit, 
  password, 
  secretKey, 
  showQR, 
  onCloseQR, 
  attempts, 
  errorMessage,
  onCloseAlert
}) => {
  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-red-200 flex items-center justify-center p-4 overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10">
          <FormCard onSubmit={onSubmit} attempts={attempts} errorMessage={errorMessage} />
        </div>
        <Alert 
          message={errorMessage} 
          show={!!errorMessage && attempts < 3} 
          onClose={onCloseAlert}
          duration={5000}
        />
        <Footer />
      </div>

      {showQR && password && secretKey && (
        <div 
          className="fixed inset-0 w-full h-full backdrop-blur-lg flex items-center justify-center z-50 animate-fadeIn"
          style={{ backgroundColor: 'rgba(231, 74, 74, 0.33)' }}
          onClick={onCloseQR}
        >
          <div 
            className="relative bg-white rounded-xl shadow-2xl p-10 max-w-md w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <QRCodeGenerator password={password} secretKey={secretKey} />
          </div>
        </div>
      )}
    </>
  );
};

export default CredentialsForm;
