const mongoose = require('mongoose')
const { Schema } = mongoose;
const UserDetailSchema = new Schema({
    user_id: {
        type: String,
        ref: 'users'
    },
    favourite_car: {
        type: String,
        required: true,
    },
    mobile_no: {
        type: String,
        required: true
    },
    
})
const user_details = mongoose.model('user_details', UserDetailSchema)
module.exports = user_details