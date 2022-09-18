const {check, body} = require('express-validator');
const users = require('../data/users.json')

module.exports = [
    check('email').trim().notEmpty().withMessage("Debe ingresar su email")
    .bail().isEmail().withMessage('Debe ingresar un email valido'),

    check('password').trim().notEmpty().withMessage("Debe ingresar su contraseña").bail()
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),

    body('email').custom((value,{req}) => {
        let user = users.find(usuario => usuario.email === value && req.body.password === usuario.password)
        if (user) {
            return true
        }else{
            return false
        }
    }).withMessage('El email o la contraseña no coincide')
]