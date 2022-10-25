'use strict';

let productos = [
  {
    nombreProducto: "Bubba",
    categoriasId: "2",
    imagen: "sushi2.jpg",
    descripcion: "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
    precio: "3595",
    descuento: "24",
    createdAt : new Date,
    updatedAt : new Date
},
{
  nombreProducto: "Langostinos en Panko",
  categoriasId: "1",
  disponible: false,
  imagen: "foto2.png",
  descripcion: "nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla",
  precio: 1563,
  descuento: 45,
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombreProducto: "New York Phila Hot",
  categoriasId: "3",
  disponible: true,
  imagen: "foto2.png",
  descripcion: "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede",
  precio: 1904,
  descuento: 30,
  createdAt : new Date,
  updatedAt : new Date
},
{
  id: 4,
  nombreProducto: "Veggie Friendly",
  categoriasId: "4",
  disponible: false,
  imagen: "foto3.jpg",
  descripcion: "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
  precio: 6916,
  descuento: 30,
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombreProducto: "SalsaGodzilla",
  categoriasId: "5",
  disponible: false,
  imagen: "foto1.jpg",
  descripcion: "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque",
  precio: 1293,
  descuento: 27,
  createdAt : new Date,
  updatedAt : new Date
},
{
  id: 6,
  nombreProducto: "Bubba",
  categoriasId: "3",
  disponible: true,
  imagen: "foto2.png",
  descripcion: "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
  precio: 4416,
  descuento: 43,
  createdAt : new Date,
  updatedAt : new Date
},
]

module.exports = {
  async up (queryInterface, Sequelize) {

    
    await queryInterface.bulkInsert('Productos', productos, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Productos', null, {});
    
  }
};
