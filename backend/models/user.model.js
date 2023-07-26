const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    //username must be unique and have a minimum length of 3
    username: {
        type: String,
        required: true,
        unique: true,
        //trims whitespace
        trim: true,
        minlength: 3
    },
}, {
    //timestamps will automatically create fields for when the user was created and modified
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
