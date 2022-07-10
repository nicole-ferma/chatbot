const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  createUser,
  getResponses,
  getResponse,
}

function createUser(name) {
  return dbConn('user').insert({ name })
}

function getResponses(db = connection) {
  return db('responses').select()
}

// postgress requires returning params in db functions
function getResponse(message, db = connection) {
  const greeting = /h[ea]llo|hi|howdy/i
  const farewell = /bye|see.you|goodbye/i
  // const randomIndex = Math.floor(Math.random() * 3)
  if (greeting.test(message)) {
    return db('responses')
      .select('responseArray')
      .where({ category: 'greetings' })
      .first()
  } else if (farewell.test(message)) {
    return db('responses')
      .select('responseArray')
      .where({ category: 'farewells' })
      .first()
  }
}
