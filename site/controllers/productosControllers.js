let products = require("../data/products.json")
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
        return res.render('carrito')
    }
}