module.exports = (req,res,next) =>{
    console.log(req.cookies)
    if (req.cookies.sugoiCookie) {
        req.session.userLogin = req.cookies.sugoiCookie                                         
    }
    next()
}

/* 
req.session.userLogin = {
    id: usuario.id,
    nombre: usuario.nombre,
    imagen: usuario.imagen,
    roll: usuario.roll,
}; */