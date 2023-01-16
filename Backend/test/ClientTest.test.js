const supertest = require('supertest')

module.exports= app=> describe('Client test', () => {
  it('Create client', async () => {
    const res = await supertest(app)
      .post('/api/client/')
      .send({
        fullname: "OUMAIMA ABOU EL HAITAM",
        CIN: "SH193011",
        tele:"06808551",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Delete Client', async () => {
    const res = await supertest(app)
      .delete('/api/client/63b1f04f028ba228eb945e02')
    expect(res.statusCode).toEqual(200)
  })

  it('Modifier Client', async () => {
    const res = await supertest(app)
      .patch('/api/client/63b1f04f028ba228eb945e02')
      .send({
        fullname: "OUMAIMA ABOU EL HAITAM",
        CIN: "B1930",
        tele:"06808551"
      })
    expect(res.statusCode).toEqual(200)
  })
  
  it('Show Client', async () => {
    const res = await supertest(app)
      .get('/api/client/')
    expect(res.statusCode).toEqual(200)
  })
})


  
