import type { NextApiRequest, NextApiResponse } from 'next'
import { Dashboard, getDashboardById } from '../../../services/dashboardService'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Dashboard>) {
  const { pid } = req.query;
  if (typeof pid === "string") {
    const pidAsNumber = parseInt(pid, 10)
    const dashboard = await getDashboardById(pidAsNumber)
    res.status(200).json(dashboard)
  }

  res.status(500);
}
