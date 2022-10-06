const { get, post } = require("../models/Reaction")
const { putUserId } = require("./userController")
const { User, reactionSchema, Thought } = require('../models');

module.exports = {


    getAllThoughts(req, res) {
        Thought.find().then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));

    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thought })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(404).json(err))
    },

    postNewThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(404).json(err))
    },

    putUpdateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thought },
            { $set: req.body },

        )
            .then((thought) => !thought ? res.status(404).json({ message: "Thought has not been updated!" })
                : res.json(thought))
    },

    deleteandRemoveThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thought }).then((thought_id) =>
            !thought_id ? res.status(404).json({ message: "Thought has been deleted" }) : res.json(thought_id))
    },

}



// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's 
// _id to the associated user's thoughts array field)
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id



