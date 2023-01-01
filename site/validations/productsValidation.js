const {check} = require('express-validator');

module.exports = [
    
    /* Categoria */
    
    check('categoriasId').trim().notEmpty().
    withMessage("Debes seleccionar una categoria"),
    
    /* Nombre */
    
    check('nombreProducto').trim().notEmpty()
    .withMessage("Debes ingresar un nombre de producto").bail()
    .isLength({min: 2, max:50})
    .withMessage("El producto debe contener 2 letras min y max 50"),
    
    /* Descripcion */
    
    check('descripcion').trim()
    .notEmpty()
    .withMessage("Debes ingresar una descripcion de tu producto")
    .bail()
    .isLength({min: 2, max:100})
    .withMessage("La descripcion del producto debe contener 2 letras min y max 100"),
    
    /* Precio */
    
    check('precio').trim().notEmpty()
    .withMessage("Debes ingresar un precio a tu producto").bail()
    .isInt()
    .withMessage("Debe ingresar un precio valido"),
    
    /* Descuento */
    
    check('descuento').trim()
    .isNumeric()
    .withMessage("El descuento debe tener solo numeros"),
        
    /* Disponibilidad */
    
    check('disponible').trim().notEmpty()
    .withMessage("Debe asegurar la disponibilidad del producto"),
]
