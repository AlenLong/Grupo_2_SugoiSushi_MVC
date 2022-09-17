const {check} = require('express-validator');

module.exports = [
    check('nombre').notEmpty().withMessage("Campo obligatorio"),
    check('apellido').notEmpty().withMessage("Campo obligatorio"),
    check('email').notEmpty().withMessage("Campo obligatorio")
    .bail().isLength({min:5}).withMessage('debe incluir al menos 5 caracteres'),
    check('password').notEmpty().withMessage("Campo obligatorio"),
    check('confirma').notEmpty().withMessage("Campo obligatorio")
    /* check('imagen').notEmpty().withMessage("Campo obligatorio") */ // express solo valida strings, crear custom validator y enlazarlo con el de multer
]