// superagent is an http client
// it calls the server and routes with specific requests
import request from 'superagent'
const responsesURL = '/api/v1/responses/'

// these functions call the routes

export function getResponses() {
  return request.get(responsesURL).then((response) => {
    // response.body is the JSON data from our server
    return response.body
  })
}

export function getResponse(message) {
  return request.get(`api/v1/responses/${message}`).then((response) => {
    return response.body
  })
}

export function createUser(name) {
  return request
    .post(`api/v1/user/create`)
    .send(name)
    .then((res) => {
      return res.body
    })
    .catch(() => {
      throw new Error('server error')
    })
}
