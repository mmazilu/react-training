// server/src/middlewares.js
import db from './db.json'
import fs from 'fs'
import finalhandler from 'finalhandler'

export function api ({ method, url }, res, next) {
    if (url !== '/api/users') { return next() }
    res.writeHead(200, { 'Content-Type': 'application/json, application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type'})
    res.end(JSON.stringify(db))
}

export function error (req, res, next, err) {
    return finalhandler(req, res)(err)
}