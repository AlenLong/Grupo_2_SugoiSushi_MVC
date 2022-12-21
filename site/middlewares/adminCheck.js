module.exports = (req,res,next) => {
    if(req.session.userLogin){
        if(req.session.userLogin.roll === 'Admin'){
            return next()
        }
    }
}