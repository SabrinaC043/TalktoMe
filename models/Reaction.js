
const { Types, Schema } = require("mongoose");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
        // function giving a new object ID. 
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
    {
        toJSON: {
            getters: true,

        },
        id: false,
    }
);



module.exports = reactionSchema;
// part of thought routes b/c all of reactions are part of thought Schema