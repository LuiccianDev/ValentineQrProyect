import React, { useState } from 'react'
import ValentineHeart from './Textparticle.tsx'

interface FormCardProps {
  onSubmit: (password: string, secretKey: string) => void
  attempts: number
  errorMessage: string
}

const FormCard: React.FC<FormCardProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState('')
  const [secretKey, setSecretKey] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(password.trim(), secretKey)
  }

  return (
    <div className="relative z-10 flex w-full max-w-lg flex-col justify-center">
      <div className="text-center">
        {/* <h1 className="mb-3 text-7xl font-bold text-red-500">Valentine QR</h1> */}
        <ValentineHeart />
      </div>

      <div className="font- mx-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-4xl border border-white/60 bg-white/40 p-10 shadow-[0_25px_50px_-12px_rgba(255,182,193,0.5)] backdrop-blur-xl"
        >
          <div className="mb-6">
            <label htmlFor="password" className="mb-3 block text-base font-bold text-red-700">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-red-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-9a6 6 0 0 0-12 0v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V8zm-2 2H8V8a4 4 0 0 1 8 0v2z" />
                </svg>
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter a secure password."
                required
                className="w-full rounded-2xl border-2 border-red-300 bg-red-50 py-3 pr-12 pl-12 text-sm text-gray-800 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-red-700 focus:outline-none"
                tabIndex={-1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  {showPassword ? (
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  ) : (
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="my-5 flex items-center justify-center text-red-500">
            <span className="h-px grow bg-red-600"></span>
            <svg
              className="mx-2 h-6 w-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 46 20"
            >
              <path d="M45 10H1" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M37 2l8 8-8 8" strokeLinecap="round" strokeLinejoin="round"></path>
              <path
                d="M23 18.572c-2.484-2.09-8-6.572-8-10.572C15 4.522 17.522 2 20.5 2c1.838 0 3.486.972 4.5 2.5.215-.29.45-.566.702-.82.12-.12.245-.236.375-.348C26.56 2.92 27.52 2 28.5 2 31.478 2 34 4.522 34 8c0 4-5.516 8.482-8 10.572L23 18.572z"
                fill="#D1355A"
                stroke="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="h-px grow bg-red-600"></span>
          </div>

          <div className="mb-10">
            <label htmlFor="secretKey" className="mb-3 block text-base font-bold text-red-700">
              Secret Key
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-red-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </span>
              <input
                id="secretKey"
                type="text"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                placeholder="Enter the secret key"
                required
                className="w-full rounded-2xl border-2 border-red-300 bg-red-50 py-3 pr-4 pl-12 text-sm text-gray-800 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-red-500 via-red-500/80 to-red-500 px-8 py-5 text-lg font-black text-white shadow-[0_10px_20px_rgba(220,38,38,0.3)] transition-all hover:scale-[1.01] active:scale-95"
          >
            <div className="absolute inset-0 h-full w-full -translate-x-full bg-white/20 transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animate-bounce"
            >
              <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z" />
            </svg>
            <span>GENERARATE QR </span>
          </button>
        </form>
      </div>

      <p className="mt-5 text-center text-base font-bold text-red-500">
        This QR code will unlock your romantic proposal.
      </p>
    </div>
  )
}

export default FormCard
