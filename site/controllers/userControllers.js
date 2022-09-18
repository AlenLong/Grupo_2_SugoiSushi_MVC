const fs = require('fs')
const path = require('path')
const users = require('../data/users.json')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
,JSON.stringify(dato,null,4),'utf-8')
// const {validationResult} = require('express-validator')
const {validationResult} = require('express-validator')

module.exports = {
    register: (req,res)=>{
        return res.render('./users/register')
    },

    registerPost: (req,res)=>{
        
        let errors = validationResult(req)
        if(req.fileValidationError){
            let imagen = {
                param : 'imagen',
                msg : req.fileValidationError,
            }
            errors.errors.push(imagen)
        }

        if (errors.isEmpty()) {
            
        
        let {nombre,apellido,email,password } = req.body
        let NewUser = {
            id: users[users.length - 1].id + 1,
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            imagen: req.file ? req.file.filename : 'Avatar_por_Defecto.jpg',
            rol: 'user'
        }
        users.push(NewUser)
        guardar(users)
    
        res.redirect('/users/login')
    }else{
        return res.render('./users/register',{
            errors : errors.mapped(),
            old: req.body
        })
    }
    },

 // ===========L O G I N===========

    login: (req,res)=>{
        return res.render('./users/login')
    },
    loginPost: (req,res)=>{
        let errors = validationResult(req)
        if (errors.isEmpty()){

            const {email} = req.body
            let user = users.find(usuario => usuario.email === email)

            req.session.userLogin = {
                id : user.id,
                nombre : user.nombre,
                imagen : user.imagen,
                roll : user.roll
            }
            return res.redirect('/users/profileUser')
            /* return res.send(req.body) */
        } else {
            /* return res.send(errors.mapped()) */
            return res.render('./users/login',{
                errors : errors.mapped(),
                old: req.body
            })
        }
    },
    profileUser : (req,res) =>{
        return res.render('./users/profileUser')
    },
    logout : (req,res) => {
        req.session.destroy();

        return res.redirect('/')
    }
}
