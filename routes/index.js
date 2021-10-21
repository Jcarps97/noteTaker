const router = require('express').Router();
const noteRoutes = require('./notes');
const userRoutes = require('./users');

router.use('/notes', noteRoutes);
router.use('/users', userRoutes);

module.exports = router;

