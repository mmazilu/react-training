// server/src/index.js
import http from 'http'
import { api, error } from './middlewares'
import { chain } from './util'

const envSpecificMiddlewares = []

if (process.env.NODE_ENV === 'dev') {
    const serveStatic = require('serve-static')

    envSpecificMiddlewares.push(
        serveStatic('public')
    )
}

const middlewares = [
    api,
    ...envSpecificMiddlewares,
    error
]

const server = http.createServer(chain(middlewares))

server.listen(process.env.PORT || 3002)