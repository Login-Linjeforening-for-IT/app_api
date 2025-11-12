import type { FastifyReply, FastifyRequest } from 'fastify'
import neverhaveiever from '../../games/neverhaveiever.ts'

export default async function NeverHaveIEverHandler(req: FastifyRequest, res: FastifyReply) {
    res.send(neverhaveiever)
}
