const router = require('express').Router();

const { getAllUsers, getSingleUser, postNewUser, putUserId, deleteUserId, deleteFriend

} = require('../../controllers/thoughtControllers');





module.exports = router;