const { User, Thought, reactionSchema } = require('../models');

module.exports = {


    getAllThoughts(req, res) {
        Thought.find().then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));

    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thought_id })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(404).json(err))
    },

    postNewThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id } },
                    { new: true }

                )
            }).then((user) => !user ? res.status(404).json({ message: "user does not exist" })
                : res.json(user))
            .catch((err) => res.status(404).json(err))
    },

    putUpdateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thought_id },
            { $set: req.body },
            { new: true })
            .then((thought_id) => !thought_id ? res.status(404).json({ message: "Thought has not been updated!" })
                : res.json(thought_id))
            .catch((err) => res.status(500).json(err));
    },

    deleteandRemoveThought(req, res) {
        Thought.deleteOne({ _id: req.params.thought_id })
            .then((thought_id) =>
                !thought_id ? res.status(404).json({ message: "Thought has been deleted" }) : res.json(thought_id))
            .catch((err) => res.status(404).json(err));
    },



    newReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thought_id },
            { $push: { reactions: req.body } },
            { new: true }
        ).then((reactions) => !reactions ? res.status(404).json({ message: "No reaction" }) : res.json(reactions))
            .catch((err) => res.status(500).json(err));
    },
    deleteAndRemoveReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thought_id },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        ).then((reactions) => !reactions ? res.status(404).json({ message: "No reaction" }) : res.json(reactions))
            .catch((err) => res.status(500).json(err));


    }
}


// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's 
// _id to the associated user's thoughts array field)
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id



