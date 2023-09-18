import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database'
import { Entry } from '../../models'

interface Data {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }

  await db.connect()

  // Temp dev
  if (process.env.NODE_ENV === 'development') {
    await Entry.deleteMany() // for dev
    await Entry.insertMany(seedData.entries)
  }

  await db.disconnect()

  res.status(200).json({
    message: 'Seed executed successfully'
  })
}
