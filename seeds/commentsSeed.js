const { Comment } = require('../models');


const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Great post!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Marvelous!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Wow! I didn't know that, thank you!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Good post, very helpful!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Very nice!"
    }
]

// const seedComments = () => Comment.bulkCreate(commentData);

// module.exports = seedComments;