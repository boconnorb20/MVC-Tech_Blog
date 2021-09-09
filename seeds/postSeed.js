const { Post } = require('../models');

const postData = [
    {
        title: 'Sequelize Data Types',
        post_content: 'Sequelize has several built in, handy data types that you can use when you define a model.  The most commonly used for simple databases are INTEGER and STRING.',
        user_id: 3
    },
    {
        title: 'Sessions',
        post_content: 'When a user logs in, a session can be established using a package such as Express Session. A cookie will be saved on the user computer, authenticating them on the website. Cookies can be set for a limited time or indefinitely.',
        user_id: 1
    },
    {
        title: "What is MVC?",
        post_content: "The model–view–controller architecture illustrates the interactions between them. The model manages the data of the application. It receives user request from the controller. The view represents the model in a particular format. The controller responds to the user request and interacts on the data model objects. The controller receives the input and passes it to the model",
        user_id: 2

    },
    {
        title: "Why Learn to Code? The Surprisingly Broad Benefits of Coding",
        post_content: "One of the strongest and most obvious draws of learning to code is the earning potential for coding and programming professionals. The Bureau of Labor Statistics (BLS) tracks salary and other important workforce information for a variety of careers.",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;