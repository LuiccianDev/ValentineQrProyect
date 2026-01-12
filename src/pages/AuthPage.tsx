import React from 'react'
import FormCard from '../components/FormCard'
import QRCodeGenerator from '../components/QrCodegenrator'
import Alert from '../components/Alert'
import Footer from '../components/Footer'
import ValentineBackground from '../components/Background'

interface CredentialsFormProps {
  onSubmit: (password: string, secretKey: string) => void
  password: string
  secretKey: string
  showQR: boolean
  onCloseQR: () => void
  attempts: number
  errorMessage: string
  onCloseAlert: () => void
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({
  onSubmit,
  password,
  secretKey,
  showQR,
  onCloseQR,
  attempts,
  errorMessage,
  onCloseAlert,
}) => {
  return (
    <>
      <ValentineBackground />
      <FormCard onSubmit={onSubmit} attempts={attempts} errorMessage={errorMessage} />
      <Alert
        message={errorMessage}
        show={!!errorMessage && attempts < 3}
        onClose={onCloseAlert}
        duration={5000}
      />
      <Footer />

      {showQR && password && secretKey && (
        <div
          className="animate-fadeIn fixed inset-0 z-50 flex h-full w-full items-center justify-center backdrop-blur-lg"
          style={{ backgroundColor: 'rgba(231, 74, 74, 0.10)' }}
          onClick={onCloseQR}
        >
          <div
            className="animate-scaleIn relative w-full max-w-md rounded-xl bg-white p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <QRCodeGenerator password={password} secretKey={secretKey} />
            <p className="mt-6 text-center text-base font-semibold text-red-600">
              Last failed attempt. Here is your QR code anyway...
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default CredentialsForm
