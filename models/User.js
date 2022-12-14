const { model, Schema } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /.+@.+\..+/,
                "invalid email entered",
            ],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
                // array of _id values referencing the User MODEL- feeding it what kind of data to store in this arrray
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual("friendCount")
    // Getter
    .get(function () {
        return this.friends.length;
    });
// Initialize our User model
const User = model("User", userSchema);

module.exports = User;
