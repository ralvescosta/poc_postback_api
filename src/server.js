const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const postbackRoutes = require('./postback/routes')

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use(postbackRoutes)

module.exports = server
