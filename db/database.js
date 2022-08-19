const Sequelize= require('sequelize')
const dbConfig= require('../config/db-config')

//Create an instance of sequelize
const sequelize= new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD,{
    dialect: dbConfig.DIALECT,
    host: dbConfig.HOST //default
});

(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})();

const db= {};
db.sequelize= sequelize;
db.model= {};
db.model.User= require('../model/user')(sequelize, Sequelize.DataTypes);
module.exports= db //export our sequelize instance

