// Middleware testing router if existe or note 
module.exports= routeErrorHandler =('*',  ( req, res, next) => {
    const err = new Error((`can't find this route`));    
    res.json({
        message: err.message,     
    })
  })
  
  