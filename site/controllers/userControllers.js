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
            imagen: req.file ? req.file.filename : 'Logo Sugoi.jpg',
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








    
    login: (req,res)=>{
        return res.render('./users/login')
    },
    loginPost: (req,res)=>{
        let errors = validationResult(req)
        if (errors.isEmpty()){
            return res.send(req.body)
        } else {
            /* return res.send(errors.mapped()) */
            return res.render('./users/login',{
                errors : errors.mapped(),
                old: req.body
            })
        }
    }
}
