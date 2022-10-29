'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialDeProductos extends Model {

    static associate(models) {
      HistorialDeProductos.belongsTo(models.Categorias,{
        as : 'categorias',
        foreignKey: 'categoriasId'
      }) 
    }
  }
  HistorialDeProductos.init({
    nombreProducto: DataTypes.STRING,
    disponible: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HistorialDeProductos',
  });
  return HistorialDeProductos;
};