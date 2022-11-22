const db = require("../database/models");
const productos = require("../database/models/productos");

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
    carta: (req,res)=>{
        db.Productos.findAll({
            include:[{
                all:true
            }]
        })
        .then(productos => {
            /* return res.send(productos) */
            return res.render('carta')
        })
        .catch(error => console.log(error))
    },
    nosotros: (req,res)=>{
        return res.render('nosotros')
    },
    promociones: (req,res)=>{
        return res.render('promociones')
    },
}
