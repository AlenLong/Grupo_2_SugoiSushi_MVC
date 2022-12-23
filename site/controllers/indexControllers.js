const db = require("../database/models");
const productos = require("../database/models/productos");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req,res)=>{
        let productoDescuentos = db.Productos.findAll({
            limit: 3,
            order: [["descuento", "desc"]],
        })
        let productosNuevos = db.Productos.findAll({
            limit:3,
            order: [["createdAt", "desc"]],
        })
        let productosVeggie = db.Productos.findAll({
            limit:3,
            where: {categoriasId: 1}
        })
        
        Promise.all([productoDescuentos,productosNuevos,productosVeggie])
        .then(([productoDescuentos,productosNuevos,productosVeggie]) => {
          /* return res.send(productosVeggie)  */  
                return res.render('index', {
                    productoDescuentos,
                    productosNuevos,
                    productosVeggie,
                    toThousand

                })
        })
        .catch(error => res.send(error))

      /*   db.Productos.findAll({
            include:[{
                all:true
            }]
        })
        .then(producto => {
            db.Productos.findAll({
                where: {
                    categoriasId: producto.categoriasId

                },
                limit: 3,
                order: [[Sequelize.literal("RAND()")]],
                include: [{
                    all: true
                }]
            })
                .then(productos => {
                    /* return res.send(productos) */
                /*     return res.render('index', {
                        producto,
                        productos
                    })
                })
        })
        .catch(error => console.log(error))
        return res.render('index')  */
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
