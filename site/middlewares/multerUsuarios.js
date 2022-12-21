const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/img/users')
    },
    filename: (req,file,callback) => {
        callback(null,'img-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = function(req,file,callback){
    if(!file.originalname.match(/\.(jpg|jpeg|png|jfif|webp)$/)){
        req.fileValidationError = "Solo estan permitidos imagenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = upload