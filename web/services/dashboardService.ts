import fetch from 'isomorphic-fetch'

export type Dashboard = {
  id: number
  createdAt: string
  updatedAt: string
  title: string
}

export async function getAllDashboards(): Promise<Array<Dashboard>> {
  const url = process.env.API_URL + 'dashboards'

  const result = await fetch(url)

  if (result.status != 200) {
    throw new Error('error fetching dashboards')
  }

  return result.json()
}
