const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const responses = require('./routes/responses')
const user = require('./routes/user')

server.use('/api/v1/responses', responses)
server.use('/api/v1/user', user)

module.exports = server
