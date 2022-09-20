module.exports = (req,res,next) =>{
    if (req.cookies.SugoiCookie) {
        req.session.userLogin = req.cookies.SugoiCookie
    }
    next()
}