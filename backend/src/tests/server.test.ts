import req from 'supertest'
import app from '../app'

// // test('[GET] /', async () => {
// //   const res = await req(app).post('/').send({

// //   })
// //   expect(res.text).toBe('Hello ts-node!')
// // })

// a helper function to make a POST request.
export function post (url, body) : req.Test {
  const httpRequest = req(app).post(url)
  httpRequest.send(body)
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:3000')
  return httpRequest
}
