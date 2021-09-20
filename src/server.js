import express from 'express'
import http from 'http'
import signale from 'signale'
import cors from 'cors'
import { corsOptions } from './helpers'
import { api } from './routes'

const PORT = process.env.PORT || 3000
const app = express();

app.use(cors(corsOptions))
const server = http.createServer(app)

server.listen(PORT, () => {
    signale.success(`Server on ${PORT}`)
})

app.use('', api)