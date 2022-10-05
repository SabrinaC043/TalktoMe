const router = require('express').Router();
const userRoutes = require('../api/users');


router.use('/users', userRoutes);
// thought routes 



module.exports = router;