const router = require('express').Router();

const { getAllUsers,
    getSingleUser,
    postNewUser,
    putUserId,
    deleteUserId,
    postNewFriend,
    deleteFriend }
    = require('../../controllers/userController');


router.route('/').get(getAllUsers).post(postNewUser);

router.route('/:user_id').get(getSingleUser).put(putUserId).delete(deleteUserId);

router.route('/:user_id/friends/:friendId').post(postNewFriend).delete(deleteFriend);


module.exports = router;
