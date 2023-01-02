const router = require('express').Router()
const Projet=require('../Controllers/ProjetController')
module.exports=ProjetRouter=>{
    router.post('/CreateProjet',Projet.CreateProjet)
    router.delete('/deleteProjets/:id',Projet.deleteProjets)
    router.put('/modifierProjet/:id',Projet.ModifierProjet)
    router.get('/selectProjets',Projet.VoirProjet)

    ProjetRouter.use('/api/auth/',router)
}