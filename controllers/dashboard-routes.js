const router = require('express').Router();
const { compareSync } = require('bcrypt');
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'created-at',
            'post_content'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username', 'github', 'twitter']
                }
            },
            {
                model: User,
                attributes: ['username', 'github', 'twitter']
            }

        ]
    })
    .then(dbPostData => {
        // serialize the data then pass
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res)=> {
    Post.findOne({
        where: {
            id: req.params.include
        },
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username', 'github', 'twitter']
                }
            },
            {
                model: User,
                attributes: ['username', 'github', 'twitter']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with id' });
            return;
        }

        // Serializing data
        const post = dbPostData.get9({ plain: true });

        res.render('edit_post', {
            post,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/create/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username', 'github', 'twitter']
                }
            },
            {
                model: User, 
                attributes: ['username', 'github', 'twitter']
            }
        ]
    })
    .then(dbPostData => {
        // Serializing data before passing 
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('create_post', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;


