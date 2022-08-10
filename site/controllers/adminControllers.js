
module.exports = {
    list: (req,res) => {
        return res.render('admin/listaProductos')
    },
    create: (req,res) => {
        return res.render('admin/crearProductos')
    },
    edit: (req,res) => {
        return res.render('admin/editarProductos')
    },
}

/* id = +req.params.id
let producto = productos.find((elemento)=>{
    return elemento.id == id
})*/