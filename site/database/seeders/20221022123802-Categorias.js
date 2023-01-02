'use strict';

let categorias = [
  {
    nombre : 'veggies',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    nombre : 'especiales',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    nombre : 'combinados',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    nombre : 'adicionales',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    nombre : 'hots',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    nombre : 'nigiris',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    nombre : 'clasicos',
    createdAt : new Date,
    updatedAt : new Date
  },

]



module.exports = {
  async up (queryInterface, Sequelize) {

    
    await queryInterface.bulkInsert('Categorias', categorias, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Categorias', null, {});
    
  }
};




/* 
veggies: {
        type: Sequelize.INTEGER
      },
      especiales: {
        type: Sequelize.INTEGER
      },
      combinados: {
        type: Sequelize.INTEGER
      },
      adicionales: {
        type: Sequelize.INTEGER
      },
      hots: {
        type: Sequelize.INTEGER
      },
      nigiris: {
        type: Sequelize.INTEGER
      },
      clasicos: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
*/
