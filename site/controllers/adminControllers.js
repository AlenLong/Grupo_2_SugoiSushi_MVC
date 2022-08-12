module.exports={
    list: (req,res) =>{
        return res.render('admin/listarProducts')
    },
    create: (req,res) =>{
        return res.render('admin/crearProducts')
    },
    edit: (req,res) =>{
        /* id = +req.params.id
        let producto = productos.find((elemento)=>{
            return elemento.id == id
        }) */
        return res.render('admin/editarProducts')
    }
}