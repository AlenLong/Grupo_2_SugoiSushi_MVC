'use strict';

let histoiralDeProductos = [
  {
    nombreProducto: "Sunshine",
    disponible: true,
    categoria: "Clasico",
    imagen: "foto3.jpg",
    descripcion: "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
    precio: 4930.3,
    descuento: 12,
    createdAt : new Date,
    updatedAt : new Date
},
{
  nombreProducto: "California",
  disponible: true,
  categoria: "Veggie",
  imagen: "foto1.jpg",
  descripcion: "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
  precio: 6409.34,
  descuento: 19,
  createdAt : new Date,
  updatedAt : new Date
},
]

module.exports = {
  async up (queryInterface, Sequelize) {

    
    await queryInterface.bulkInsert('HistorialDeProductos', histoiralDeProductos, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('HistorialDeProductos', null, {});
    
  }
};