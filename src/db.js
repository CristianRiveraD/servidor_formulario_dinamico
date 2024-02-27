import mongoose from 'mongoose'

export const dbConnections = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/formularioDinamico')
    console.log('coneccion a la base de datos exitosa')
  } catch (error) {
    console.error(error)
  }
}
