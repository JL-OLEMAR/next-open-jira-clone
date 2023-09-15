import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'

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
  await db.disconnect()

  res.status(200).json({
    message: 'Seed executed successfully'
  })
}
