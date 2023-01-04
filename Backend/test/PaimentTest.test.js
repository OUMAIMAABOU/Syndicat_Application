const supertest = require('supertest')

module.exports=app=> describe('Paiment test', () => {
  it('Create Paiment', async () => {
    const res = await supertest(app)
      .post('/api/paiment/create_paiment')
      .send({
        prix: 200,
        Date: "2023-01-03",
        appartementid:"63b32b672d392d0987b38844",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Update Paiment', async () => {
    const res = await supertest(app)
      .put('/api/paiment/update_paiment/63b1f04f028ba228eb945e02')
      .send({
        prix: 200,
        Date: "2022-01-04",
        appartementid:"63b32b672d392d0987b38844",
      })
    expect(res.statusCode).toEqual(200)
  })

  
  it('Show Paiment', async () => {
    const res = await supertest(app)
      .get('/api/paiment/show_paiment')
    expect(res.statusCode).toEqual(200)
  })
})


  
