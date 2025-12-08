import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { MENSAJE, USERNAME } from '../const/constants.ts'

interface QRCodeGeneratorProps {
  password: string
  secretKey: string
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ password, secretKey }) => {
  const [qrUrl, setQrUrl] = useState<string>('')

  useEffect(() => {
    let isMounted = true

    const generarQRCode = async () => {
      if (!password || !secretKey) return

      const enlace = `https://instagram.com/${encodeURIComponent(USERNAME)}`
      const contenidoQR = `${MENSAJE} | Enlace : ${enlace}`

      // 1. Generar QR normal en canvas
      const canvas = document.createElement('canvas')

      await QRCode.toCanvas(canvas, contenidoQR, {
        width: 500,
        margin: 2,
        color: {
          dark: '#000000', // Se sobrescribirá luego
          light: '#00000000',
        },
      })

      // 2. Crear degradado
      const ctx = canvas.getContext('2d')!
      const gradient = ctx.createLinearGradient(0, 0, 500, 500)

      gradient.addColorStop(0, '#ff8484ff')
      gradient.addColorStop(1, '#ac2525ff')

      // 3. Reemplazar color negro por el degradado
      const imageData = ctx.getImageData(0, 0, 500, 500)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const [r, g, b] = [data[i], data[i + 1], data[i + 2]]

        // detectar "píxeles negros" del QR
        if (r < 50 && g < 50 && b < 50) {
          const x = (i / 4) % 500
          const y = Math.floor(i / 4 / 500)

          // ❌ grad eliminado (no se usa)
          // const grad = ctx.createLinearGradient(0, 0, 500, 500)

          // ❌ pixel eliminado (no se usa)
          // const pixel = ctx.getImageData(x, y, 1, 1)

          // marcar píxel como opaco
          data[i] = 255
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Aplicar degradado sobre los módulos negros
      ctx.globalCompositeOperation = 'source-in'
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 500, 500)

      const dataUrl = canvas.toDataURL('image/png')

      if (isMounted) setQrUrl(dataUrl)
    }

    generarQRCode()
    return () => {
      isMounted = false
    }
  }, [password, secretKey])

  if (!qrUrl) return null

  return (
    <div className="flex items-center justify-center">
      <img src={qrUrl} alt="Código QR" className="rounded-xl border-4 border-white" />
    </div>
  )
}

export default QRCodeGenerator

