const supertest = require('supertest')

module.exports=app=> describe('Paiment test', () => {
  it('Create Paiment', async () => {
    const res = await supertest(app)
      .post('/api/paiment/')
      .send({
        Date: "2023-01-03",
        appartementid:"63c52578df89a69805fadea5",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Update Paiment With error', async () => {
    const res = await supertest(app)
      .put('/api/paiment/63b1f04f028ba228eb945e02')
      .send({
        Date: "2022-01-04",
        appartementid:"63c52578df89a69805fadea5",
      })
    expect(res.statusCode).toEqual(400)
  })
  it('Update Paiment', async () => {
    const res = await supertest(app)
      .put('/api/paiment/63c523eadf89a69805faddf2')
      .send({
        Date: "2022-01-04",
        appartementid:"63c52578df89a69805fadea5",
      })
    expect(res.statusCode).toEqual(200)
  })


  
  it('Show Paiment', async () => {
    const res = await supertest(app)
      .get('/api/paiment/')
    expect(res.statusCode).toEqual(200)
  })
})


  
