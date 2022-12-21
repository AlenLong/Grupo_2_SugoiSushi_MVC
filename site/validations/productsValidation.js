const {check} = require('express-validator');

module.exports = [
    
    /* Categoria */
    
    check('categoriasId').trim().notEmpty().
    withMessage('Debe seleccionar una categoria'),
    
    /* Nombre */
    
    check('nombreProducto').trim().notEmpty()
    .withMessage('Debe darle un nombre al producto'),
    
    /* Descripcion */
    
    check('descripcion').trim()
    .notEmpty().withMessage('Describa su producto').bail().isLength({min: 10}).withMessage('Minimo 10 carácteres'),
    
    /* Precio */
    
    check('precio').trim().notEmpty()
    .withMessage('Este campo es obligatorio').bail()
    .isInt()
    .withMessage('Solo carácteres numericos'),
    
    /* Descuento */
    
    check('descuento').trim()
    .isInt()
    .withMessage('Solo carácteres numericos'),
    
    /* Disponibilidad */
    
    check('disponible').trim().notEmpty()
    .withMessage('Este campo es obligatorio'),
]
