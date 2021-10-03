import request from 'supertest'
import http, { IncomingMessage, ServerResponse } from 'http'
import { apiResolver } from 'next/dist/server/api-utils'
import handler from './dashboards'
import { getAllDashboards } from '../../services/dashboardService'

jest.mock('../../services/dashboardService')

describe('dashboards api', () => {
  const stubDashboards = [
    {
      id: 1,
      createdAt: '2021-10-01',
      updatedAt: '2021-10-02',
      title: 'Stubbed Dashboard 1',
    },
    {
      id: 2,
      createdAt: '2021-10-02',
      updatedAt: '2021-10-02',
      title: 'Stubbed Dashboard 2',
    },
    {
      id: 3,
      createdAt: '2021-10-01',
      updatedAt: '2021-10-03',
      title: 'Stubbed Dashboard 3',
    },
  ]

  const mockGetAllDashboards = getAllDashboards as jest.MockedFunction<typeof getAllDashboards>

  it('returns 200 and the requested dashboards', async () => {
    mockGetAllDashboards.mockResolvedValue(stubDashboards)

    const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
      return apiResolver(req, res, undefined, handler, {} as any, false)
    }

    const server = http.createServer(requestHandler)
    const agent = await request.agent(server).get('/api/dashboards')

    expect(agent.status).toEqual(200)

    const result = JSON.parse(agent.text)
    expect(result).toEqual(stubDashboards)
  })
})
