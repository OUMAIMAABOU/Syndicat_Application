const router = require('express').Router()
const Appartement=require('../Controllers/AppartementController')
module.exports=AppartementRouter=>{
    router.post('/CreateAppartement',Appartement.CreateAppartement)
    // router.delete('/deleteAppartements/:id',Appartement.deleteAppartements)
    // router.put('/modifierAppartement/:id',Appartement.ModifierAppartement)
    // router.get('/selectAppartements',Appartement.VoirAppartement)

    AppartementRouter.use('/api/auth/',router)
}