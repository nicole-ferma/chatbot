// superagent is an http client
// it calls the server and routes with specific requests
import request from 'superagent'
const repliesURL = '/api/v1/replies/'

// these functions call the routes

export function getReplies() {
  return request.get(repliesURL).then((response) => {
    // response.body is the JSON data from our server
    return response.body
  })
}

export function getReply(message) {
  return request.get(`api/v1/replies/${message}`).then((response) => {
    return response.body
  })
}

export function personaliseReply(name) {
  return request.get(`api/v1/visitors/${name}`).then((response) => {
    // is it ok to just return?
    return
  })
}

export function createVisitor(name) {
  return request
    .post(`api/v1/visitors/add`)
    .send({ name })
    .then(() => {
      // is it ok to just return?
      return
    })
    .catch(() => {
      throw new Error('server error')
    })
}

export function getVisitor() {
  return request.get(`api/v1/visitors`).then((response) => {
    return response.body
  })
}
