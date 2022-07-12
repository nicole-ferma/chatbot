const request = require('supertest')

const server = require('../../server')
const db = require('../../db/db')

const prefix = '/api/v1/visitors'

jest.mock('../../db/db')

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

const visitorsMock = [
  {
    id: 32,
    name: 'Toothless',
  },
  {
    id: 33,
    name: 'Pattern',
  },
  {
    id: 34,
    name: 'Stitch',
  },
]

// const visitorMock = {
//   id: 34,
//   name: 'Stitch',
// }

describe('GET /api/v1/visitors', () => {
  it('returns status 200 and an array of visitors', () => {
    expect.assertions(2)
    db.getVisitors.mockReturnValue(Promise.resolve(visitorsMock))
    return request(server)
      .get(prefix)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(visitorsMock).toEqual(res.body)
      })
  })
  it('returns status 500 when the promise fails', () => {
    expect.assertions(1)
    db.getVisitors.mockImplementation(() => Promise.reject(new Error()))
    return request(server)
      .get(prefix)
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
