/* const path = require('path')
const multer = require('multer') 

 const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        callback (null,'./public/img/productos')
    },
    filename: (req,file,callback) =>{
        callback(null,'img-' + Date.now() + path.extname(file.originalname))
    }
})


const upload = multer ({ 
    storage 
}) */
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/img/productos')
    },
    filename: (req,file,callback) => {
        callback(null,'img-' + Date.now() + path.extname(file.originalname))
    },
});

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Solo se permiten imágenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = upload