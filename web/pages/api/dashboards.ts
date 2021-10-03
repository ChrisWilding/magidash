// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Dashboard = {
    id: Number
    createdAt: String
    updatedAt: String
    title: String
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Dashboard>>
) {
    res.status(200).json([
        {
            id: 1,
            createdAt: '2021-10-01',
            updatedAt: '2021-10-02',
            title: 'Stubbed Dashboard 1'
        },
        {
            id: 2,
            createdAt: '2021-10-02',
            updatedAt: '2021-10-02',
            title: 'Stubbed Dashboard 2'
        },
        {
            id: 3,
            createdAt: '2021-10-01',
            updatedAt: '2021-10-03',
            title: 'Stubbed Dashboard 3'
        }
    ])
}
