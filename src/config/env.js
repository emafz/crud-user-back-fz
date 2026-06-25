import dotenv from 'dotenv'

dotenv.config()

console.log('✅ Variables de entorno cargadas')
console.log(process.env.MONGODB_URI)
console.log(process.env.PORT)

export const env = {

  PORT: process.env.PORT,

  MONGODB_URI: process.env.MONGODB_URI

}