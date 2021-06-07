const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./eventRoutes');
const eventRoutes = require('./eventRoutes')

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/newevent', eventRoutes)

module.exports = router;
