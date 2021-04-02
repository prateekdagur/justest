const mongoose = require('mongoose')
const { Schema } = mongoose;
const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true,
        bcrypt: true,
    },
})

const users = mongoose.model('users', usersSchema);
module.exports = users
