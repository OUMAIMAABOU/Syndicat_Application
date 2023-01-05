const {verifyToken}=require('../Middleware/Authentification')
const router = require('express').Router()
const Appartement=require('../Controllers/AppartementController')
module.exports=AppartementRouter=>{
    router.post('/CreateAppartement',verifyToken(),Appartement.CreateAppartement)
    router.delete('/deleteAppartements/:id',verifyToken(),Appartement.DeleteAppartement)
    router.put('/modifierAppartement/:id',verifyToken(),Appartement.UpdateAppartement)
    router.get('/showAppartements',verifyToken(),Appartement.ShowAppartement)
    AppartementRouter.use('/api/appartement',router)
}