const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addUser,
  getUser,
  personaliseGreeting,
  personaliseFarewell,
  getResponses,
  getResponse,
}

function addUser(name, db = connection) {
  return db('user').update({ name }).where({ id: 1 })
}

function getUser(db = connection) {
  return db('user').select('name')
}

function personaliseGreeting(name, db = connection) {
  return db('responses')
    .update({
      responseArray: JSON.stringify([
        `greetings, ${name}`,
        `howdy, ${name}`,
        `hallo, ${name}`,
      ]),
    })
    .where({ category: 'greetings' })
}

function personaliseFarewell(name, db = connection) {
  return db('responses')
    .update({
      responseArray: JSON.stringify([
        `farewell, ${name}`,
        `until next time, ${name}`,
        `so long, ${name}`,
      ]),
    })
    .where({ category: 'farewells' })
}

function getResponses(db = connection) {
  return db('responses').select()
}

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
