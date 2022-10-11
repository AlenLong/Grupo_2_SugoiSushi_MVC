const {check} = require('express-validator');

module.exports = [
    /* Categoria */
    check('Categoria').trim().notEmpty().
    withMessage('Este campo es obligatorio'),
    /* Nombre */
    check('nombre').trim().notEmpty()
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
    check('stock').trim().notEmpty()
    .isInt(),
]
