const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET /api/v1/responses
router.get('/', (req, res) => {
  console.log('tryin my best D:')
  db.getResponses()
    .then((responses) => {
      res.json(responses)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
