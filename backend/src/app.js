import Fastify from 'fastify'
import cors from '@fastify/cors'
import { pool } from './db.js'

const fastify = Fastify({
    logger: true
})

// Registrar CORS
await fastify.register(cors, {
    origin: '*'
})

// Rutas de productos
fastify.post('/productos', async (request, reply) => {
    const { nombre, precio, cantidad, tienda } = request.body
    const result = await pool.query(
        'INSERT INTO productos (nombre, precio, cantidad, tienda) VALUES ($1, $2, $3, $4) RETURNING *',
        [nombre, precio, cantidad, tienda]
    )
    return result.rows[0]
})

fastify.get('/productos', async (request, reply) => {
    const result = await pool.query('SELECT * FROM productos')
    return result.rows
})

fastify.delete('/productos/:id', async (request, reply) => {
    const { id } = request.params
    await pool.query('DELETE FROM productos WHERE id = $1', [id])
    return { message: 'Producto eliminado' }
})

export default fastify
