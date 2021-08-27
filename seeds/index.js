const seedPosts = require('./postSeed');
const seedUsers = require('./userSeed');
const seedComments = require('./commentSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- Database Synced ----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll;