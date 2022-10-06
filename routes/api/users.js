const router = require('express').Router();

const { getAllUsers,
    getSingleUser,
    postNewUser,
    putUserId,
    deleteUserId,
    deleteFriend }
    = require('../../controllers/userController');


router.route('/').get(getAllUsers).post(postNewUser);

router.route('/:user_id').get(getSingleUser).put(putUserId);

router.route('/:user_id').delete(deleteUserId).delete(deleteFriend);


module.exports = router;
