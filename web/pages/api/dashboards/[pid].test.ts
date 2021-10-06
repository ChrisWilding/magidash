import request from 'supertest'
import http, { IncomingMessage, ServerResponse } from 'http'
import { apiResolver } from 'next/dist/server/api-utils'
import handler from './[pid]'
import { getDashboardById } from '../../../services/dashboardService'

jest.mock('../../../services/dashboardService')

describe('dashboards api', () => {
  const dashboard = {
    id: 1,
    createdAt: '2021-10-01',
    updatedAt: '2021-10-02',
    title: 'Stubbed Dashboard 1',
  }

  const mockGetDashboardById = getDashboardById as jest.MockedFunction<typeof getDashboardById>

  it('returns 200 and the single requested dashboard', async () => {
    mockGetDashboardById.mockResolvedValue(dashboard)

    const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
      return apiResolver(req, res, { pid: '3' }, handler, {} as any, false)
    }

    const server = http.createServer(requestHandler)
    const agent = await request.agent(server).get('/api/dashboards/3')

    expect(agent.status).toEqual(200)

    const result = JSON.parse(agent.text)
    expect(result).toEqual(dashboard)
  })
})
