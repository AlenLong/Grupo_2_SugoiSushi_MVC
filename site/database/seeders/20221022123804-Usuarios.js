'use strict';

let usuarios = [
  {
    nombre: "Tim",
    apellido: "Paterson",
    email: "ms@dos.com",
    password: "$2a$10$0EJZlEYTZVPMR8wQaACLme8ZbyrDGoGUHeofqsTApw5DbuUX2w79W",
    imagen: "TimPaterson.jpg",
    roll: "Admin",
    createdAt : new Date,
    updatedAt : new Date
},
{
  
  nombre: "Ellen",
  apellido: "Ripley",
  email: "last@survivor.com",
  password: "$2a$10$0EJZlEYTZVPMR8wQaACLme8ZbyrDGoGUHeofqsTApw5DbuUX2w79W",
  imagen: "Ellen_Ripley.jpg",
  roll: "User",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Bill",
  apellido: "Gates",
  email: "bill@microsoft.com",
  password: "$2a$10$0EJZlEYTZVPMR8wQaACLme8ZbyrDGoGUHeofqsTApw5DbuUX2w79W",
  imagen: "Avatar_por_Defecto.jpg",
  roll: "User",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Philis",
  apellido: "Pennone",
   email: "ppennone3@zdnet.com",
  password : "$2a$10$0EJZlEYTZVPMR8wQaACLme8ZbyrDGoGUHeofqsTApw5DbuUX2w79W",
  imagen : "Avatar_por_Defecto.jpg",
  roll: "User",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Warde",
  apellido: "Culvey",
  email: "wculvey4@pcworld.com",
  password: "$2a$10$0EJZlEYTZVPMR8wQaACLme8ZbyrDGoGUHeofqsTApw5DbuUX2w79W",
  imagen: "Avatar_por_Defecto.jpg",
  roll: "User",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Vernen",
  apellido: "Bagby",
  email: "vbagby5@cpanel.net",
  password: "$2a$10$0EJZlEYTZVPMR8wQaACLme8ZbyrDGoGUHeofqsTApw5DbuUX2w79W",
  imagen: "Avatar_por_Defecto.jpg",
  roll: "User",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Arnold",
  apellido: "Terminator",
  email: "T@1000.com",
  password: "$2a$10$0EJZlEYTZVPMR8wQaACLme8ZbyrDGoGUHeofqsTApw5DbuUX2w79W",
  imagen: "1663692257165_img_perfil.jpg",
  roll: "User",
  createdAt : new Date,
  updatedAt : new Date
}

]

module.exports = {
  async up (queryInterface, Sequelize) {

    
    await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Usuarios', null, {});
    
  }
};
