'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productos.belongsTo(models.Categorias,{
        as : 'categorias',
        foreignKey: 'categoriasId'
      }),
      Productos.hasMany(models.Carritos,{
        as: 'carritos',
        foreignKey: 'productosId'
      })
    }
  }
  Productos.init({
    nombreProducto: DataTypes.STRING,
    categoriasId: DataTypes.INTEGER,
    disponible: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};