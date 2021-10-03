import nock from 'nock'

import { getAllDashboards } from './dashboardService'

describe('dashboardService', () => {
  const stubDashboards = [
    {
      id: 1,
      createdAt: '2021-10-01',
      updatedAt: '2021-10-02',
      title: 'A Test Dashboard',
    },
  ]

  beforeAll(() => {
    nock.disableNetConnect()
  })

  beforeEach(() => {
    nock('https://cw-magidash-api.herokuapp.com').get('/dashboards').reply(200, JSON.stringify(stubDashboards))
  })

  afterAll(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })

  it('fetches the dashboards from the api', async () => {
    const result = await getAllDashboards()
    expect(result).toEqual(stubDashboards)
  })
})
