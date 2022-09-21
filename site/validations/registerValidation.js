const {check, body} = require('express-validator');

module.exports = [
    check('nombre').trim().notEmpty().withMessage("Debe ingresar su nombre")
    .bail().isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),

    check('apellido').trim().notEmpty().withMessage("Debe ingresar su apellido")
    .bail().isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),

    check('email').trim().notEmpty().withMessage("Debe ingresar su email")
    .bail().isEmail().withMessage('Debe ingresar un email valido'),

    check('password').isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    
    check('confirma').isLength({min:8}).withMessage('Las contraseñas no coinciden').bail(),

    // falta terminos y condicines 

    body('confirma').custom((value,{req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden')
]