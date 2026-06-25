import mongoose from 'mongoose'
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { env } from './env.js'

const connectDB = async () => {
  try {
    console.log('🔄Conectando MongoDB...')
    await mongoose.connect(env.MONGODB_URI)
    console.log('MongoDB conectado correctamente')
  } catch (error) {
    console.error('Error conectado MongoDB')
    console.log(error)
  }
};

export default connectDB
