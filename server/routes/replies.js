const express = require('express')
const router = express.Router()

const db = require('../db/db')

// more specific routes first!
// GET /api/v1/replies/:message
router.get(`/:message`, (req, res) => {
  const message = req.params.message
  const randomIndex = Math.floor(Math.random() * 3)
  db.getReply(message)
    .then((replies) => {
      const repliesArray = JSON.parse(replies.repliesArray)
      const reply = repliesArray[randomIndex]
      res.json(reply)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// GET /api/v1/replies
router.get('/', (req, res) => {
  db.getReplies()
    .then((replies) => {
      res.json(replies)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
