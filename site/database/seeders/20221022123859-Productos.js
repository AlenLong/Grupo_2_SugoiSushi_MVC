'use strict';
let productos = require('../../data/productosdb.json')

  productos = productos.map(productos => {
    let e = {
      nombreProducto: productos.nombreProducto,
    categoriasId: productos.categoriasId,
    disponible: productos.disponible,
    imagen: productos.imagen,
    descripcion: productos.descripcion,
    precio: productos.precio,
    descuento: productos.descuento,
    createdAt:new Date,
    updatedAt:new Date
    }
    return e
  })


module.exports = {
  async up (queryInterface, Sequelize) {

    
    await queryInterface.bulkInsert('Productos', productos, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Productos', null, {});
    
  }
};
