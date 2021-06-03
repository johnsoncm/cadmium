const router = require('express').Router();
const {Events}  = require('../../models');
const withAuth = require('../../utils/auth');

//This is getting all of the events withAuth,
router.get('/',  async (req, res) => {
  try {
    const eventData = await Events.findAll(req.body)
    res.status(200).json(eventData);
    console.log(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//This is getting events based on their ID.
router.get('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Events.findbyPk(req.body)
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// This is posting a new event. We may have to edit the req.body portion. withAuth,
router.post('/',  async (req, res) => {
  console.log('is this working', req.body);
  try {
    const newEvent = await Events.create({
      ...req.body,
      // user_id: req.session.user_id,
    });
    console.log('event', newEvent);

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
    console.log('error', err);
  }
});

//This is updating an event based on it's ID..
router.put('/:id', async (req, res) => {
  try {
    console.log(`Changing Event Name To.. ${req.body.category_name} `)
  
    const eventData = await   Events.update(
      { category_name: req.body.category_name },
      { returning: true, where: {id: req.params.id} }
    )
      .then((result) => {
        res.status(200).json(result);
      });

     } catch (err) {
       res.status(400).json(err);
     }
    });

//This is deleting an event by an ID.
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Events.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event was found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
