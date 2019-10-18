import request from 'supertest'
import app from '../app'

// a helper function to make a POST request.
export function post (url:string, body:object) : request.Test {
  const httpRequest = request(app.express).post(url)
  httpRequest.send(body)
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:3000')

  return httpRequest
}

beforeAll(async () => {
  await app.connectDatabase()
})

afterAll(async () => {
  app.closeDatabase()
})

test('[GET] /', async () => {
  const res = await request(app.express).get('/')
  expect(res.text).toBe('Olá galera')
})

test('[POST] /sessions', async () => {
  const res = await post('/sessions', { email: 'vimivini99@gmail.com' })
  expect(res.type).toBe('application/json')
  expect(res.status).toBe(200)
  const resJson = JSON.parse(res.text)
  expect(resJson).toMatchObject({ email: 'vimivini99@gmail.com' })
})
