
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            index: { unique: true, sparse: true }
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User' // array of _id values referencing the User MODEL- feeding it what kind of data to store in this arrray
        }],
        toJSON: {
            virtuals: true,
        },
        id: false,


    })


const User = mongoose.model('User', userSchema);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })

module.exports = User;