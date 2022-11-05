const {check} = require('express-validator');

module.exports = [
    /* Categoria */
    check('categoriasId').trim().notEmpty().
    withMessage('Este campo es obligatorio'),
    /* Nombre */
    check('nombreProducto').trim().notEmpty()
    .withMessage('Este campo es obligatorio'),
    /* Descripcion */
    check('descripcion').trim()
    .notEmpty().withMessage('Este campo es obligatorio').bail().isLength({min: 10}).withMessage('Minimo 10 carácteres'),
    /* Precio */
    check('precio').trim().notEmpty()
    .withMessage('Este campo es obligatorio').bail()
    .isInt()
    .withMessage('Solo carácteres numericos'),
    /* Descuento */
    check('descuento').trim()
    .isInt()
    .withMessage('Solo carácteres numericos'),
    /* Stock */
    check('disponible').trim().notEmpty()
    .withMessage('Este campo es obligatorio')
    .isInt(),
]
