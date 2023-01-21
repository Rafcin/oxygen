import { getServerAuthSession } from '@/server/common/get-server-auth-session'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await detailSearch(req, res)
  } else {
    return res
      .status(405)
      .json({ message: '[X] Method not allowed: ', success: false })
  }
}

// Details:
async function detailSearch(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession({ req, res })
  const body = req.body
  if (session) {
    try {
      const data = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${body.place_id}&key=${process.env.NEXT_PUBLIC_GMAPS_API}`
      )
      return res.status(200).json(data)
    } catch (error) {
      console.error('[X] Request error:', error)
      res.status(500).json({ error: '[X] Error detail search:', success: false })
    }
  } else {
    return res
      .status(401)
      .json({ error: '[X] Error: Not logged in.', success: false })
  }
}
