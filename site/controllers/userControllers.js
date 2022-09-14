/* const fs = require('fs')
const path = require('path')
const users = require('../data/users.json')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
,JSON.stringify(dato,null,4),'utf-8')
 */

module.exports = {
    register: (req,res)=>{
        return res.render('./users/register')
    },



    
    login: (req,res)=>{
        return res.render('./users/login')
    },
}