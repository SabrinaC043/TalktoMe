const router = require('express').Router();
const { getAllUsers, getSingleUser } = require('../../controllers/userController');




// router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getSingleUser);




// get All Userrs 
// getSingle User by its id // POST a new user 





module.exports = router;
