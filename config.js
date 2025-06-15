// L instance elli bech tconnecti m3a lbd
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sql7784876', 'sql7784876', '9zlLsr1Bel', {
  host: 'sql7.freesqldatabase.com	',        
  dialect: 'mysql',         
  logging: false,          
  define: {
    timestamps: true,       
  },
});
module.exports = sequelize;
