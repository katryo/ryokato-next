import type { Request, Response } from 'express'

export default (req: Request, res:Response) => {
  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')

  res.json({ date })
}
