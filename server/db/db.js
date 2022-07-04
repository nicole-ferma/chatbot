const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getResponses,
}

function getResponses(db = connection) {
  return db('responses').select()
}

// postgress requires returning params in db functions
