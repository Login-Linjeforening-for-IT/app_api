import type { FastifyReply, FastifyRequest } from 'fastify'
import games from '../../games/games.ts'

export default async function GamesHandler(req: FastifyRequest, res: FastifyReply) {
    res.send(games)
}
