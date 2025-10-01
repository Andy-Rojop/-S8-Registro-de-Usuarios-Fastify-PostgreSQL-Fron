import fastify from './app.js'
import { config } from 'dotenv'

config()

const start = async () => {
    try {
        const PORT = process.env.PORT
        await fastify.listen({ port: PORT, host: '0.0.0.0' })
        console.log(`Servidor corriendo en puerto ${PORT}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()