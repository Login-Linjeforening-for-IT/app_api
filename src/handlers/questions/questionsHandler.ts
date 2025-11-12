import type { FastifyReply, FastifyRequest } from 'fastify'
import questions from '../../games/questions.ts'

export default async function QuestionsHandler(req: FastifyRequest, res: FastifyReply) {
    res.send(questions)
}
