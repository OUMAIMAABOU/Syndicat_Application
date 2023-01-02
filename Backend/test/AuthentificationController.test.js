const supertest = require('supertest')
const app = require('../server');
describe('Login function', () => {
  it('login', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "oumaima@gimal.com",
        password: "123",
      })
    expect(res.statusCode).toEqual(200)
  })
  it('Error', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "imaabouOtam@gmail.com",
        password: "OUMA",
      })
    expect(res.statusCode).toEqual(400)
  })
})




  
