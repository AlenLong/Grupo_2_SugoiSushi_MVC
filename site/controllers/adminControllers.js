const fs = require('fs')
const path = require('path')
const productos = require('../data/products.json')
const historial = require('../data/historial.json')
const {validationResult} = require('express-validator');

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
         let errors = validationResult(req)
         if (req.fileValidationError) {
            let imagen={
                param : 'imagen',
                msg: req.fileValidationError
            }
            errors.errors.push(imagen)
         }

         if (errors.isEmpty()) {

         
            return res.send(req.file)
         }

        let{Categoria,nombreDeProducto,descripcion,precio,descuento,altaDeProducto} = (req.body)
        
        let productoNuevo = {
        id: productos[productos.length - 1].id + 1,
        Categoria: Categoria,
        nombreDeProducto: nombreDeProducto, 
        descripcion: descripcion,
        precio: precio ,
        descuento: descuento, 
        altaDeProducto : altaDeProducto,
        imagen: req.file ? req.file.filename :'default-products.jpg',
    }
    productos.push(productoNuevo)
    guardar(productos)
    return res.render('admin/crearProducts',{
        errors: errors.mapped(),
        old: req.body
    })
    },


    edit: (req,res) =>{
        id = +req.params.id
        console.log(id)
        let producto = productos.find((elemento)=>{
            return elemento.id == id
        })
        console.log(producto)
        return res.render('admin/editarProducts', {producto})
    },
    storeEdit: (req,res) =>{
        console.log('editando')
        console.log(req.body)
        id = +req.params.id
        let { nombreDeProducto, categoria, altaDeProducto, disponible, imagen, descripcion, precio, descuento } = req.body
        /* console.log(id) */
        console.log(disponible)

        productos.forEach(producto => {
            if (producto.id === id) {
                producto.nombreDeProducto = nombreDeProducto
                producto.categoria = categoria
                producto.altaDeProducto = altaDeProducto
                producto.disponible = disponible
                producto.imagen = imagen
                producto.descripcion = descripcion
                producto.precio = precio
                producto.descuento = descuento
            }
        }) 
        guardar(productos)
        res.redirect('../listarProducts')
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