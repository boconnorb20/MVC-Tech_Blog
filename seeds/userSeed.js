const { User } = require('../models');

const userData = [
    {
        username: "maddie_o",
        twitter: "maddieo",
        github: "maddieo",
        email: "maddie_o@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "chelsey_o",
        twitter: "chelseyo",
        github: "chelseyo",
        email: "chelsey_o@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "chloe_o",
        twitter: "chloeo",
        github: "chloeo",
        email: "chloe_o@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "avery_r",
        twitter: "averyr",
        github: "averyr",
        email: "avery_r@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "brian_o",
        twitter: "briano",
        github: "boconnor2",
        email: "brian_o@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "codemon_d",
        twitter: "codemon_d",
        github: "codeman",
        email: "code112@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;