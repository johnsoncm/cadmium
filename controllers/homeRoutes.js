const router = require('express').Router();
const { Events, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data(MAY NEED TO CHANGE)
    // const eventData = await Events.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // Serialize data so the template can read it
    // const projects = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('landingPage', { 
      // projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', async (req, res) => {
  try {
    // Get all events and JOIN with user data(MAY NEED TO CHANGE)
    const eventData = await Events.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const events = eventData.map((event) => event.get({ plain: true }));
    // Pass serialized data and session flag into template
    const user = await User.findByPk(req.session.user_id);
    console.log("events", events);
    res.render('homepage', {
      events,
      logged_in: req.session.logged_in,
      username: user.username
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/events/:id', async (req, res) => {
  try {
    const eventData = await Events.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const events = eventData.get({ plain: true });

    res.render('events', {
      ...events,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/newevent', withAuth, async (req, res) => {
  try {
    console.log('this route is hitting')
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Events }],
    });
    console.log("req.session.user_id" , req.session.user_id);

    const user = userData.get({ plain: true });

    res.render('newevent', {
      // ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('signup');
});

module.exports = router;
