const fs = require("fs");
const path = require("path");
const productos = require("../data/products.json");
const historial = require("../data/historial.json");
const { validationResult } = require("express-validator");

const guardar = (dato) =>
    fs.writeFileSync(
        path.join(__dirname, "../data/products.json"),
        JSON.stringify(dato, null, 4),
        "utf-8"
    );
const guardarHistorial = (dato) =>
    fs.writeFileSync(
        path.join(__dirname, "../data/historial.json"),
        JSON.stringify(dato, null, 4),
        "utf-8"
    );
const db = require("../database/models");

module.exports = {
    list: (req, res) => {
        db.Productos.findAll()
            .then((productos) => {
                return res.render("admin/listarProducts", {
                    productos,
                    redirection: "listarProducts",
                });
            })
            .catch((error) => {
                return console.log(error);
            });
    },
    create: (req, res) => {
        return res.render("admin/crearProducts");
    },
    store: (req, res) => {
        let errors = validationResult(req);
        if (req.fileValidationError) {
            let imagen = {
                param: "imagen",
                msg: req.fileValidationError,
            };
            errors.errors.push(imagen);
        }
        if (errors.isEmpty()) {
            db.Productos.create({
                nombreProducto: req.body.nombreProducto,
                categoriasId: req.body.categoriasId,
                disponible: req.body.disponible,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                descuento: req.body.precio,
                imagen: req.file ? req.file.filename : "default-products.jpg",
            })
                .then((productos) => {
                    return res.redirect("/admin/listarProducts" /* {
                        productos,
                        redirection: "listarProducts", */
                    /* }) */)
                })
                .catch((error) => {
                    return console.log(error);
                });
        } else {
            return res.render("admin/crearProducts", {
                errors: errors.mapped(),
                old: req.body,
            });
        }
    },

    edit: (req, res) => {
        let idParams = +req.params.id;
        db.Productos.findOne({
            where : {
                id : idParams
            }
        })
        .then((producto) => {
            return res.render("admin/editarProducts", { producto });
        })
    },
    storeEdit: (req, res) => {
        let idParams = +req.params.id;
      /*  return send(req.body) */
        let errors = validationResult(req);
        if (req.fileValidationError) {
            let imagen = {
                param: "imagen",
                msg: req.fileValidationError,
            };
            errors.errors.push(imagen);
        }
        if (errors.isEmpty()){
            
            db.Productos.update({
                    nombreProducto: req.body.nombreProducto,
                    categoriasId: req.body.categoriasId,
                    disponible: req.body.disponible,
                    descripcion: req.body.descripcion,
                    precio: req.body.precio,
                    descuento: req.body.descuento,
                    imagen: req.file ? req.file.filename : "default-products.jpg",
            },{
                where:{
                    id : +req.params.id
                }
            })

            .then(producto =>{
                
                res.redirect("/admin/listarProducts");
                }
            )
        }  // enviar old
    },

    destroy: (req, res) => {
       let idParams = +req.params.id;
       db.Productos.destroy({
        where : {
            id: idParams
        }
       })
       .then(producto => {
        /* return res.send(producto) */
        return res.redirect("/admin/listarProducts");
       })
       .catch(error => res.send(error))

        /* let productoAEliminar = productos.find((elemento) => {
            return elemento.id == idParams;
        }); */
/* 
        historial.push(productoAEliminar);
        guardarHistorial(historial);
 */
        /* let productosModificadoos = productos.filter(
            (producto) => producto.id !== idParams
        );
        guardar(productosModificadoos);

        return res.redirect("/admin/listarProducts"); */
    },
    history: (req, res) => {
        return res.render("admin/listarProducts", {
            productos: historial,
            redirection: "history",
        });
    },
};
