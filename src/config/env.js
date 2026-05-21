import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Forzamos la carga del .env desde la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, '../.env') })

console.log ('Variables de entorno cargadas')

export const env = {
  PORT: process.env.PORT || 7000,
  MONGO_URI: process.env.MONGODB_URI
}

// Validación de seguridad para desarrollo
if (!env.MONGO_URI) {
  console.error('❌ ERROR: La variable MONGODB_URI no está definida en el archivo .env')
  console.log('Variables detectadas:', Object.keys(process.env).filter(k => k.includes('MONGO')))
}