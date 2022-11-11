let products = require("../data/products.json");
const db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
    detail: (req,res)=>{
        console.log(req.params.id)
        let product = products.find(product => product.id === +req.params.id);
        console.log(product)
        let productosRelacionado = products.filter(producto => producto.categoria === product.categoria);
        console.log(productosRelacionado)
        return res.render('detail', {product, productosRelacionado})
    },
    
    carrito: (req,res)=>{
       /*  let id = +req.params.id
        let productoEnCarrito = productos.find((producto) => producto.id === id) */
        db.Productos.findAll({
            include:[{
                all: true
            }]
        })
        .then(productos => {
            return res.send(productos) 
            /* return res.render('carrito',{
                producto : productoEnCarrito,
                productos
            }) */
        })
    },
    listado: (req,res)=>{
        /*  let id = +req.params.id
         let productoEnCarrito = productos.find((producto) => producto.id === id) */
         db.Productos.findAll({
             include:[{
                 all: true
             }]
         })
         .then(productos => {
              /*  return res.send(productos) */
             return res.render('listado',{
                 productos,
                 toThousand
             })
         })
     }
}
