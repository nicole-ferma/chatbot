const express = require('express')
const router = express.Router()

const db = require(`../db/db`)

// GET /api/v1/visitors/:name
router.get('/:name', (req, res) => {
  const name = req.params.name
  return db
    .personaliseGreeting(name)
    .then(() => {
      return db.personaliseFarewell(name)
    })
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log(error.message)
      res.status(500).send('Database Error')
    })
})

// POST /api/v1/visitors/add
router.post('/add', (req, res) => {
  const name = req.body.name
  db.addVisitor(name)
    .then((name) => {
      return name
    })
    .catch(() => {
      res.status(500).send('Database Error')
    })
})

// GET /api/v1/visitors
router.get(`/`, (req, res) => {
  db.getVisitor()
    .then((visitor) => {
      res.json(visitor[0].name)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
