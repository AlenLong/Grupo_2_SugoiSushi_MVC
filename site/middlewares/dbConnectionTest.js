const {sequelize} = require('../database/models');

const dbConnectionTet = async () =>{    // funcion asincronica 
    try { //promesa
        await sequelize.authenticate()
        console.log('La Coneccion fue establecida con Exito');
    } catch (error) {
        console.log('No pudimos conectarnos con la base de datos', error);
    }
}

module.exports = dbConnectionTet