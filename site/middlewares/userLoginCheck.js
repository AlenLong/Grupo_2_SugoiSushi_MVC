module.exports = (req,res,next) => {
    if(req.session.userLogin){
        res.locals.userLogin = req.session.userLogin  //  iguala  archivos locales, con archivos de session  // req.session puede almacenar mucha menos informacion que req.locals. tener en cuenta a la hora de mandar info 
    }
    next()
}