const config = require('../knexfile')
const knex = require('knex')
const testDb = knex(config.test)

const db = require('../../db/db')

beforeAll(() => {
  return testDb.migrate.latest()
})
beforeEach(() => {
  return testDb.seed.run()
})

describe('getReplies()', () => {
  it('returns all bot replies from the database', () => {
    expect.assertions(3)
    return db.getReplies(testDb).then((replies) => {
      // update this when db grows
      expect(replies).toHaveLength(3)
      expect(replies[0].category).toContain('greetings')
      expect(replies[1].repliesArray).toContain('farewell')
    })
  })
})

describe('getReply()', () => {
  it('returns a bot reply array from the correct category in the replies database', () => {
    expect.assertions(1)
    return db.getReply('hello', testDb).then((reply) => {
      expect(reply.repliesArray).toContain('greetings')
    })
  })
})

describe('personaliseGreeting()', () => {
  it('updates greetings in the replies database with the visitor name', () => {
    expect.assertions(1)
    return db
      .personaliseGreeting('Stitch', testDb)
      .then(() => {
        return testDb('replies').select()
      })
      .then((replies) => {
        expect(replies[0].repliesArray).toContain('Stitch')
      })
  })
})

describe('personaliseFarewell()', () => {
  it('updates farewells in the replies database with the visitor name', () => {
    expect.assertions(1)
    return db
      .personaliseFarewell('Stitch', testDb)
      .then(() => {
        return testDb('replies').select()
      })
      .then((replies) => {
        expect(replies[1].repliesArray).toContain('Stitch')
      })
  })
})

describe('getVisitors()', () => {
  it('returns all visitors from the database', () => {
    expect.assertions(2)
    return db.getVisitors(testDb).then((visitors) => {
      expect(visitors).toHaveLength(1)
      expect(visitors[0].name).toContain('friend')
    })
  })
})

describe('addVisitor()', () => {
  it('adds visitor name into the visitors database', () => {
    expect.assertions(1)
    return db
      .addVisitor('Lilo', testDb)
      .then(() => {
        return testDb('visitors').select()
      })
      .then((visitors) => {
        expect(visitors).toHaveLength(2)
      })
  })
})
