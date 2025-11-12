import config from '#constants'
import isVersionBelow from '#utils/notifications/isVersionBelow.ts'
import type { FastifyReply, FastifyRequest } from 'fastify'

type VersionQuery = {
    version: string
    lang?: 'no' | 'en'
}

export default async function VersionHandler(req: FastifyRequest, res: FastifyReply) {
    const { version, lang = 'en' } = req.query as VersionQuery
    const forceUpdate = isVersionBelow(version, config.minVersion)

    const updateMessages = {
        no: {
            title: 'Oppdatering tilgjengelig!',
            body: 'Gode nyheter! En ny versjon er tilgjengelig 😃'
        },
        en: {
            title: 'New update available!',
            body: 'Good news! A new version is available 😃'
        }
    }

    const forcedUpdateMessages = {
        no: {
            title: 'Oppdatering påkrevd!',
            body: 'Appen er utdatert og må oppdateres for å fortsette å bruke appen 🚨'
        },
        en: {
            title: 'Update Required!',
            body: 'Your version is outdated and must be updated to continue using the app 🚨'
        }
    }

    const message = forceUpdate ? forcedUpdateMessages[lang] : updateMessages[lang]
    const buttons = forceUpdate
        ? [{ text: lang === 'no' ? 'Oppdater nå' : 'Update Now', action: 'update' }]
        : [
            { text: lang === 'no' ? 'Oppdater nå' : 'Update Now', action: 'update' },
            { text: lang === 'no' ? 'Senere' : 'Later', action: 'later' }
        ]

    res.send({
        updateRequired: forceUpdate,
        update: message,
        buttons
    })
}
