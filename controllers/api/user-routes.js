const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET/api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
      User.findOne({
          attributes: { exclude: ['password']},
          where: {
              id: req.params.id
          },
          include: [
              {
                  model: Post,
                  attributes: ['id', 'title', 'post_content', 'create_at']
              },
              {
                 model: Comment, 
                 attributes: ['id', 'comment_text', 'created_at'],
                 include: {
                     model: Post,
                     attributes: ['title']
                 } 
              }
        ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with id'});
            return;
      }
      res.json(dbUserData);
    });

});

// POST /api users
router.post('/', (req,res) => {
    User.create ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        github: req.body.github,
        twitter: req.body.twitter
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.github = dbUserData.github;
            req.session.twitter = dbUserData.twitter;
            req.session.loggedIn = true;

            req.json(dbUserData);
        });
    });
});

// POST Login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'No user with email' });
                return;
            }

            const validPassword = dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Password is incorrect'});
                return;
            }
            // session variables
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.github = dbUserData.github;
                req.session.twitter = dbUserData.twitter;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: 'Logged Sucessfull'});
            });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else{
        res.status(404).end();
    }
});

// PUT api/ users
router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        indivdualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});


// DElete api/users
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No users found with id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;