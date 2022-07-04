// superagent is an http client
// it calls the server and routes with specific requests
import request from 'superagent'
const responsesURL = '/api/v1/responses/'

export function getResponses() {
  return request.get(responsesURL).then((response) => {
    // response.body is the JSON data from our server
    return response.body
  })
}
