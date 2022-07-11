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

export function personaliseGreeting(name) {
  return request.get(`api/v1/user/${name}`).then((response) => {
    // is it ok to just return?
    return
  })
}
export function createUser(name) {
  return request
    .post(`api/v1/user/add`)
    .send({ name })
    .then(() => {
      // is it ok to just return?
      return
    })
    .catch(() => {
      throw new Error('server error')
    })
}

export function getUser() {
  return request.get(`api/v1/user`).then((response) => {
    return response.body
  })
}
