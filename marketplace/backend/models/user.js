const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    purchase_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    purchase_date : {
        type: Date,
        required: true,
        default: Date.now
    },
    content : {
        type: String,
        required: true
    },
    game_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    currency : {
        type: String,
        required: true
    },
})

const userSchema = new mongoose.Schema({
    login : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    is_banned : {
        type: Boolean,
        required: true
    },
    registration_date : {
        type: Date,
        required: true,
        default: Date.now
    },
    avatar_data : {
        type: String,
        required: false
    },
    purchased_games : {
        type: [purchaseSchema],
        required: false
    },
    support_issues : {
        type: [mongoose.Types.ObjectId],
        required: false
    },
})

module.exports = mongoose.model("User", userSchema)