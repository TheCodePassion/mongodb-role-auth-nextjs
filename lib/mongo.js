import mongoose from 'mongoose'

let isConnected = false

const startDb = async () => {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_DB)
      isConnected = true
    } catch (error) {
      console.log(error)
    }
  }
}

export default startDb
