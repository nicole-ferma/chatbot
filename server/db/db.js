const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addUser,
  getUser,
  personaliseGreeting,
  personaliseFarewell,
  getReplies,
  getReply,
}

function addUser(name, db = connection) {
  return db('user').update({ name }).where({ id: 1 })
}

function getUser(db = connection) {
  return db('user').select('name')
}

function personaliseGreeting(name, db = connection) {
  return db('replies')
    .update({
      repliesArray: JSON.stringify([
        `greetings, ${name}`,
        `howdy, ${name}`,
        `hallo, ${name}`,
      ]),
    })
    .where({ category: 'greetings' })
}

function personaliseFarewell(name, db = connection) {
  return db('replies')
    .update({
      repliesArray: JSON.stringify([
        `farewell, ${name}`,
        `until next time, ${name}`,
        `so long, ${name}`,
      ]),
    })
    .where({ category: 'farewells' })
}

function getReplies(db = connection) {
  return db('replies').select()
}

function getReply(message, db = connection) {
  const greeting = /h[ea]llo|hi|howdy/i
  const farewell = /bye|see.you|goodbye/i
  // const randomIndex = Math.floor(Math.random() * 3)
  if (greeting.test(message)) {
    return db('replies')
      .select('repliesArray')
      .where({ category: 'greetings' })
      .first()
  } else if (farewell.test(message)) {
    return db('replies')
      .select('repliesArray')
      .where({ category: 'farewells' })
      .first()
  } else {
    return db('replies')
      .select('repliesArray')
      .where({ category: 'unknown' })
      .first()
  }
}
