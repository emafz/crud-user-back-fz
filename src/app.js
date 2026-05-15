import express from 'express'

import { env } from '../config/env.js'

import connectDB from '../config/db.js'

import userRoutes from '../routes/user.routes.js'

const app = express()

app.use(express.json())

connectDB()

app.use(userRoutes)

app.listen(env.PORT, () => {
    console.log(`Servidor conectado en puerto ${env.PORT}`)
})