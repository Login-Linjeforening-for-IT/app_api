import type { FastifyReply, FastifyRequest } from 'fastify'
import okredflagdealbreaker from "../../games/okredflagdealbreaker.ts"

export default async function OkRedFlagDealBreakerHandler(req: FastifyRequest, res: FastifyReply) {
    res.send(okredflagdealbreaker)
}
