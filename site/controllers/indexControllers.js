
module.exports = {
    index: (req,res)=>{
        return res.render('index')
    },

    detail: (req,res)=>{
        return res.render('detail')
    },

    carrito: (req,res)=>{
        return res.render('carrito')
    },

    register: (req,res)=>{
        return res.render('register')
    },

    login: (req,res)=>{
        return res.render('login')
    },

    nosotros: (req,res)=>{
        return res.render('nosotros')
    },
}