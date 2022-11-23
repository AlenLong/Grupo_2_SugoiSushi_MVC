const {check, body} = require('express-validator');
/* const users = require('../data/users.json') */
const db = require ('../database/models')
const bcryptjs = require ('bcryptjs')


module.exports = [
    check('email').trim().notEmpty().withMessage("Debe ingresar su email")
    .bail().isEmail().withMessage('Debe ingresar un email valido'),

    check('password').trim().notEmpty().withMessage("Debe ingresar su contraseña").bail()
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),

    body('email').custom((value,{req}) => {

        return db.Usuarios.findOne({ 
            where : {
                email : value
            }
        })
        .then(user => {
            
            if (user && bcryptjs.compareSync(req.body.password, user.password)) {
                return true
            }else{
                return false
            }

        })
        .catch(error => Promise.reject('El email o la contraseña no coincide') )

    }).withMessage('El usuario no se encuntra registrdo o las credenciales no son validas')
]