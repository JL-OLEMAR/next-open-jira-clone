import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@db'
import { Entry, IEntry } from '@models'

type Data =
  | { message: string }
  | IEntry[] // get
  | IEntry // post put

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return await getEntries(res)

    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect()
  const entries = await Entry.find().sort({
    createdAt: 'ascending'
  })
  await db.disconnect()

  return res.status(200).json(entries)
}
