import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  ok: boolean
  message: string
  method: string | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    ok: true,
    message: 'Everyone correct',
    method: req.method
  })
}
