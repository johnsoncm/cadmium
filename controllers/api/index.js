const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./eventRoutes');
const eventRoutes = require('./eventRoutes')

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/events', eventRoutes)

module.exports = router;
