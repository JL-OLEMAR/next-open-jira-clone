/* eslint-disable no-useless-return */
import mongoose from 'mongoose'

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooseConnection = {
  isConnected: 0
}

export const connect = async () => {
  if (mongooseConnection.isConnected) {
    console.log('=> ✅ using an existing database connection')
    return
  }

  // If the connection is not open, open it, or select other options
  if (mongoose.connections.length > 0) {
    mongooseConnection.isConnected = mongoose.connections[0].readyState

    if (mongooseConnection.isConnected === 1) {
      console.log('=> ✅ using previous connection')
      return
    }

    // finish the connection
    await mongoose.disconnect()
  }

  await mongoose.connect(process.env.MONGO_SRV ?? '')
  mongooseConnection.isConnected = 1
  console.log('=> 🚀 connected to MongoDB', process.env.MONGO_SRV)
}

export const disconnect = async () => {
  if (mongooseConnection.isConnected === 0) return

  await mongoose.disconnect()
  console.log('=> ❌ disconnected from MongoDB')
}
