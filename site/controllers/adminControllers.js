const fs = require('fs')
const path = require('path')
const productos = require('../data/products.json')
const historial = require('../data/historial.json')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/products.json')
,JSON.stringify(dato,null,4),'utf-8')
const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
,JSON.stringify(dato,null,4),'utf-8')



module.exports={
    list: (req,res) =>{
        return res.render('admin/listarProducts',{
            productos,
            redirection: 'listarProducts'
        })
    },
    create:(req,res) => {
        return res.render('admin/crearProducts')
    },
    store:(req,res) => {
        let{Categoria,nombre,Descripcion,precio,descuento,stock} = (req.body)
      
        let productoNuevo = {
        id: productos[productos.length - 1].id + 1,
        Categoria: Categoria,
        nombre: nombre, 
        Descripcion: Descripcion,
        precio: precio ,
        descuento: descuento, 
        stock: stock,
        imagen: 'foto3.jpg',
      }
       productos.push(productoNuevo)
       guardar(productos)

       res.redirect('/admin/listarProducts')
    },
    edit: (req,res) =>{
        /* id = +req.params.id
        let producto = productos.find((elemento)=>{
            return elemento.id == id
        }) */
        return res.render('admin/editarProducts')
    },
    destroy: (req,res) => {
idParams = +req.params.id
    
let productoAEliminar = productos.find((elemento) => {
    return elemento.id == idParams
})

historial.push(productoAEliminar)
guardarHistorial(historial)

let productosModificadoos = productos.filter(producto => producto.id !== idParams)
guardar(productosModificadoos)

return res.redirect('/admin/listarProducts')

},
history : (req,res) =>{
    return res.render('admin/listarProducts',{
        productos : historial,
        redirection : "history"
    })
}
}