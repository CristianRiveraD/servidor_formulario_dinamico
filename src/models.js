import mongoose from 'mongoose'

// Esquema de formularios
const formSchema = new mongoose.Schema(
  {
    // almacenar un json
    data: {
      type: Object,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('Form', formSchema)
