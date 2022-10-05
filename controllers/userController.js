const { User, reactionSchema, Thought } = require('../models');

module.exports = {

    getAllUsers(req, res) {
        User.find().then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.user_id })
            .select('thoughts').select('friends')
            .then((user) => !user ? res.status(404) : res.status(200).json(user))
            .catch((err) => res.status(500).json(err))

    },

    postNewUser(req, res) {
        // example data
        // {
        //     "thoughtText": "Here's a cool thought...",
        //     "username": "lernantino",
        //     "userId": "5edff358a0fcb779aa7b118b"
    },



    putUserId(req, res) {

    },

    deleteUserId(req, res) {
        User.deleteOne()
    },

    postNewFriend(req, res) {

    },

    deleteFriend(req, res) {

    },

}

