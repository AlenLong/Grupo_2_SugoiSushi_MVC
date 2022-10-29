'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Categorias.hasMany(models.Productos,{
        as : 'productos',
        foreignKey: 'categoriasId'
      }) 
      Categorias.hasMany(models.HistorialDeProductos,{
        as : 'historiales',
        foreignKey: 'categoriasId'
      }) 
    }
  }
  Categorias.init({
    veggies: DataTypes.INTEGER,
    especiales: DataTypes.INTEGER,
    combinados: DataTypes.INTEGER,
    adicionales: DataTypes.INTEGER,
    hots: DataTypes.INTEGER,
    nigiris: DataTypes.INTEGER,
    clasicos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};