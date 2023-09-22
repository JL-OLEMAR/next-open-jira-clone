import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Entry, IEntry } from '../../../models'

type Data =
  | { message: string }
  | IEntry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      message: `The id is not valid ${id}`
    })
  }

  switch (req.method) {
    case 'PUT':
      return await updateEntry(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()
  const entryToUpdate = await Entry.findById(id)

  if (!entryToUpdate) {
    await db.disconnect()
    return res.status(404).json({ message: `Entry not found with that id ${id}` })
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, {
      description,
      status
    }, { runValidators: true, new: true }) // Valid if the options are updated

    await db.disconnect()
    updatedEntry && res.status(200).json(updatedEntry)
  } catch (error: any) {
    console.log({ error })
    await db.disconnect()
    res.status(400).json({
      message: error.errors.status.message
    })
  }
}
