const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
// send index.html as default
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
