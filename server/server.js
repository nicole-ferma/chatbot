const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const replies = require('./routes/replies')
const user = require('./routes/user')

server.use('/api/v1/replies', replies)
server.use('/api/v1/user', user)

module.exports = server
