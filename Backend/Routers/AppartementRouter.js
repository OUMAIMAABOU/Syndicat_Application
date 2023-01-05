const {verifyToken}=require('../Middleware/Authentification')
const router = require('express').Router()
const Appartement=require('../Controllers/AppartementController')
module.exports=AppartementRouter=>{
    router.post('/',verifyToken(),Appartement.CreateAppartement)
    router.delete('/:id',verifyToken(),Appartement.DeleteAppartement)
    router.put('/:id',verifyToken(),Appartement.UpdateAppartement)
    router.get('/',verifyToken(),Appartement.ShowAppartement)
    AppartementRouter.use('/api/appartement',router)
}