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

    },

    
    login: (req,res)=>{
        return res.render('./users/login')
    },
    loginPost: (req,res)=>{
        let {email, password} = req.body
        /*         let userLogin = {}
                //comparar el email ingresado, con user.email, si coincide, repetir con la pass
                users.forEach(function(user) {
                    console.log(user.email)
                    if (email == user.email){
                        userLogin = user
                    } else {
                        console.log("El usuario no existe") //ver manejo de errores
                        res.json(req.body)
                        //res.redirect('/users/login')
                    } 
                }) */
        let userLogin = users.filter(function(user) {
            return user.email === email
        })

        // filter devuelve un array, si el array esta vacio el usuario no existe
        if (!userLogin.length) {
            console.log("El usuario no existe") //ver manejo de errores
            return res.redirect('/users/login')
        }

        // si el usuario existe, comparo y valido su password y roll
        if (password === userLogin[0].password){
            if (userLogin[0].roll === "admin"){
                return res.redirect('/admin/listarProducts')
            } else{
            res.redirect('/carrito')
            }
        } else {
            console.log('password incorrecta') //chequear manejo de errores
            return res.redirect('/users/login')
        }
    },
}