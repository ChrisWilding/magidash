import request from "supertest";
import http, { IncomingMessage, ServerResponse } from "http";
import { apiResolver } from "next/dist/server/api-utils";
import { NextApiRequest, NextApiResponse } from "next";
import handler from './dashboards'

describe("dashboards api", () => {
    it("returns some stubbed dashboards", async () => {
        expect.assertions(1)

        const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
            return apiResolver(req, res, undefined, handler);
        }

        let service = http.createServer()

        const server = http.createServer(requestHandler);
        const agent = await request.agent(server).get("/dashboards");

        const result = JSON.parse(agent.text)
        expect(result).toEqual([
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
    })
})
