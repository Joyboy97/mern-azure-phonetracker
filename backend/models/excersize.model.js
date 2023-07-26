const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const excersizeSchema = new Schema({
    //username must be unique and have a minimum length of 3
    username: { type: String, required: true,
          validate: {
        validator: function (v) {
            // only contains numbers and unique
            return /^[a-zA-Z]+$/.test(v)
        },
        message: 'Title can only contain letters and must be unique',
        }},
    description: { type: String, required: true },
    //duration must be a number and is required
    duration: { type: Number, required: true },
    //date must be a date and is required
    date: { type: Date, required: true },
}, {
    //timestamps will automatically create fields for when the user was created and modified
    timestamps: true,
});

const Excersize = mongoose.model('Excersize', excersizeSchema);

module.exports = Excersize;
