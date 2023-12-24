const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
    default_price : {
        type: Number,
        required: true
    },
    current_price : {
        type: Number,
        required: true
    },
    currency : {
        type: String,
        required: true
    },
    is_foreign_market : {
        type: Boolean,
        required: true
    },
    purchase_url : {
        type: String,
        required: true
    },
})

const commentSchema = new mongoose.Schema({
    login : {
        type: String,
        required: true
    },
    created_at : {
        type: Number,
        required: true,
        default: Date.now
    },
    rating : {
        type: Boolean,
        required: true
    },
    comment_title : {
        type: String,
        required: true
    },
    comment_text : {
        type: String,
        required: true
    },
})

const gameSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    picture_data : {
        type: Buffer,
        required: false
    },
    genre : {
        type: String,
        required: true
    },
    offers : {
        type: [offerSchema],
        required: false
    },
    comments : {
        type: [commentSchema],
        required: false
    },
})

module.exports = mongoose.model("Game", gameSchema)
