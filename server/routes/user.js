const express = require('express')
const router = express.Router()

const db = require(`../db/db`)

// POST /api/v1/user/add
router.post('/add', (req, res) => {
  const name = req.body.name
  db.addUser(name)
    .then((name) => {
      return name
    })
    .catch(() => {
      res.status(500).send('Database Error')
    })
})

module.exports = router
