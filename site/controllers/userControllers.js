const fs = require('fs')
const path = require('path')
const users = require('../data/users.json')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
,JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    register: (req,res)=>{
        return res.render('./users/register')
    },

    registerPost: (req,res)=>{
        let {nombre,apellido,email,password,imagen = ''} = req.body
        let NewUser = {
            id: users[users.length - 1].id + 1,
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            imagen: imagen
        }
        users.push(NewUser)
        guardar(users)
    
        res.redirect('/users/login')
        /* console.log(req.body)
        return res.json(req.body) */
    },



    
    login: (req,res)=>{
        return res.render('./users/login')
    },
}