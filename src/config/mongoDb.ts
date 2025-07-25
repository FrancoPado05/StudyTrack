import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    console.log('✅ Conectado a MongoDB Atlas')
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error)
    process.exit(1)
  }
}
