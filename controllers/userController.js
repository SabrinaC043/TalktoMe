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
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(404).json(err))
    },

    putUserId(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.user_id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user_id) =>
                !user_id ? res.status(404).json({ message: "No user with this ID" }) : res.json(user_id)
            )
    },

    deleteUserId(req, res) {
        User.deleteOne({ _id: req.params.user_id })
            .then((user) =>
                !user ? res.status(404).json({ message: "User with this id has been deleted" })
                    : Thought.deleteMany({ _id: { $in: user.Thought } })
            ).then(() => res.json({ message: "User and thoughts have been deleted" }))
    },

    postNewFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.user_id },
            { $in: req.body })
            .then(() => !user_id ? res.status(404).json({ message: "No new friend post" }) : res.json(user_id))
    },

    deleteFriend(req, res) {
        User.findOneAndDelete({ _id: req.params.user_id }).then((user_id) =>
            !user_id ? res.status(404).json({ message: "No friend with this ID" }) : res.json(user_id))
    },

}

