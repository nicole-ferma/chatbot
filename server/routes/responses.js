const express = require('express')
const router = express.Router()

const db = require('../db/db')

// more specific routes first!
// GET /api/v1/responses/:message
router.get(`/:message`, (req, res) => {
  const message = req.params.message
  const randomIndex = Math.floor(Math.random() * 3)
  db.getResponse(message)
    .then((replies) => {
      const replyArray = JSON.parse(replies.responseArray)
      const reply = replyArray[randomIndex]
      res.json(reply)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// GET /api/v1/responses
router.get('/', (req, res) => {
  db.getResponses()
    .then((responses) => {
      res.json(responses)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
