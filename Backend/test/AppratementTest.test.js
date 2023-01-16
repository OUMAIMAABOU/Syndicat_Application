const supertest = require('supertest')

module.exports=app=> describe('Appratement test', () => {
  it('Create Appartement', async () => {
    const res = await supertest(app)
      .post('/api/appartement/')
      .send({
        Adresse: "hay el amal 01 laayoune",
        numero: 12535,
        surface:"200m",
        prix:200,
        client_id:"63b6d4fb493859427f69add7"
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Delete Appartement', async () => {
    const res = await supertest(app)
      .delete('/api/appartement/63b1f04f028ba228eb945e02')
    expect(res.statusCode).toEqual(200)
  })

  it('Modifier Appartement', async () => {
    const res = await supertest(app)
      .patch('/api/appartement/63b1f04f028ba228eb945e02')
      .send({
        Adresse: "hay el wifaq 01 laayoune",
        numero: 1252,
        loue:false,
        surface:"200m",
        prix:200,
        client_id:"63b3efe9019b19b411eb4c55"
      })
    expect(res.statusCode).toEqual(200)
  })
  
  it('Show Appartement', async () => {
    const res = await supertest(app)
      .get('/api/appartement/')
    expect(res.statusCode).toEqual(200)
  })
})


  
