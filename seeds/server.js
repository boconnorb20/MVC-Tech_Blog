const seedPosts = require('./postSeed.json');
const seedUsers = require('./userSeed.json');
const seedComments = require('./commentsSeed.json');
const {Comment, User, Post} = require('../models')

const sequelize = require('../config/connection');



const seedAll = async () => {

    const sequelizeResult = await sequelize.sync({force: true});
    console.log("---> sequelizeResult :" + (sequelizeResult));

    const seedUsersResult = await User.bulkCreate(seedUsers);
    console.log("---> seedUsersResult :" + (seedUsersResult));

    const resultPost = await Post.bulkCreate(seedPosts);
    console.log("---> resultPost :" + (resultPost));

    const resultComment = await Comment.bulkCreate(seedComments);
    console.log("---> resultComment :" + (resultComment));

    process.exit(0);
};

seedAll();