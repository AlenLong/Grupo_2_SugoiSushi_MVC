const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({   // para guardar los datos en una ruta especifica
    destination: (req,file,callback) => {
        callback(null,'./public/img/users') // 'img-' + Date.now() + path.extname(file.originalname)
    },
    filename: (req,file,callback)=> {
        callback(null,`${Date.now()}_img_perfil${path.extname(file.originalname)}`) // recibe el nombre del archivo, y le agrega la fecha y el img-
    }
}); 
        // valida que solo se suban imagenes
    const fileFilter = function(req, file, callback){
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){  // express validator solo valida strings. no img. Para hcerlo necesitamos un custom validator integrando multer para comparar el mimetype (tipo de archivo) https://stackoverflow.com/questions/39703624/express-how-to-validate-file-input-with-express-validator
            req.fileValidationError = "Solo se permite imágenes";
            return callback(null, false, req.fileValidationError);
        }
        callback(null,true)
    }

const upload = multer({ 
    storage,
    fileFilter
});

module.exports = upload
