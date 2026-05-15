import mongoose from 'mongoose'

import { env } from './env.js'

const connectDB = async () => {
  try {
    console.log('Conectando MongoDB...')
    await mongoose.connect(env.MONGO_URI)
    console.log('MongoDB conectado correctamente')
  } catch (error) {
    console.error('Error conectado MongoDB:')
    console.error(error.message || error) // Aquí verás la causa real
    process.exit(1) // Detiene la app si no hay DB, ya que no funcionará sin ella
  }
}

export default connectDB
