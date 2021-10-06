// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Dashboard, getAllDashboards } from '../../../services/dashboardService'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<Dashboard>>) {
  const dashboards = await getAllDashboards()
  res.status(200).json(dashboards)
}
