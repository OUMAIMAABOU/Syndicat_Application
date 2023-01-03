const router = require('express').Router()
const Appartement=require('../Controllers/AppartementController')
module.exports=AppartementRouter=>{
    router.post('/CreateAppartement',Appartement.CreateAppartement)
    router.delete('/deleteAppartements/:id',Appartement.DeleteAppartement)
    router.put('/modifierAppartement/:id',Appartement.UpdateAppartement)
    router.get('/showAppartements',Appartement.ShowAppartement)
    AppartementRouter.use('/api/auth/',router)
}