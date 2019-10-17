import req from 'supertest'
import app from '../app'

test('[GET] /', async () => {
  const res = await req(app.express).get('/')
  expect(res.text).toBe('Olá galera')
  app.closeConnection()
})

// a helper function to make a POST request.
export function post (url:string, body:object) : req.Test {
  const httpRequest = req(app.express).post(url)
  httpRequest.send(body)
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:3333')

  return httpRequest
}
