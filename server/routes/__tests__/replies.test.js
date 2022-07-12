const request = require('supertest')

const server = require('../../server')
const db = require('../../db/db')

const prefix = '/api/v1/replies'

jest.mock('../../db/db')

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

const repliesMock = [
  {
    id: 1,
    category: 'greetings',
    repliesArray:
      '["greetings, Toothless","howdy, Toothless","hallo, Toothless"]',
  },
  {
    id: 2,
    category: 'unknown',
    repliesArray:
      '["pardon me?","sorry, I don\'t understand","what do you mean?"]',
  },
]

const replyMock = {
  id: 2,
  category: 'farewells',
  repliesArray:
    '["farewell, Toothless","until next time, Toothless","so long, Toothless"]',
}

describe('GET /api/v1/replies', () => {
  it('returns status 200 and an array of bot replies', () => {
    expect.assertions(2)
    db.getReplies.mockReturnValue(Promise.resolve(repliesMock))
    return request(server)
      .get(prefix)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(repliesMock).toEqual(res.body)
      })
  })
  it('returns status 500 when the promise fails', () => {
    expect.assertions(1)
    db.getReplies.mockImplementation(() => Promise.reject(new Error()))
    return request(server)
      .get(prefix)
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('GET /api/v1/replies/:message', () => {
  it('returns status 200 and one bot reply', () => {
    expect.assertions(1)
    db.getReply.mockReturnValue(Promise.resolve(replyMock))
    return request(server)
      .get(`${prefix}/hi`)
      .then((res) => {
        expect(res.status).toBe(200)
        console.log(res.body)
      })
  })
})
