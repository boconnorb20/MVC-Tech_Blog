// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database
let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
  sequelize = new Sequelize('tech_blog_post_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false,
  });
// }

module.exports = sequelize;