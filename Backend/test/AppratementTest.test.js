const supertest = require('supertest')

module.exports=app=> describe('Appratement test', () => {
  it('Create Appartement', async () => {
    const res = await supertest(app)
      .post('/api/appartement/CreateAppartement')
      .send({
        Adresse: "hay el amal 01 laayoune",
        numero: 12535,
        surface:"200m",
        prix:200,
        client_id:"63b726e43f2764b8d7cc2603"
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Create Appartement', async () => {
    const res = await supertest(app)
      .post('/api/appartement/CreateAppartement')
      .send({
        Adresse: "hay el amal 01 laayoune",
        numero: 3333,
        surface:"200m",
        prix:200,
        client_id:"63b726e43f2764b8d7cc2603"
      })
    expect(res.statusCode).toEqual(400)
  })

  it('Delete Appartement', async () => {
    const res = await supertest(app)
      .delete('/api/appartement/deleteAppartements/63b1f04f028ba228eb945e02')
    expect(res.statusCode).toEqual(200)
  })

  it('Modifier Appartement', async () => {
    const res = await supertest(app)
      .patch('/api/appartement/modifierAppartement/63b1f04f028ba228eb945e02')
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
      .get('/api/appartement/showAppartements')
    expect(res.statusCode).toEqual(200)
  })
})


  
