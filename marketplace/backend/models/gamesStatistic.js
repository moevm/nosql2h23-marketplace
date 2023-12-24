const mongoose = require('mongoose')

const gameStatistic = new mongoose.Schema({
    game_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },

    login : {
        type: String,
        required: true
    },
    date : {
        type: Number,
        required: true,
        default: Date.now
    },
    action : {
        type: String,
        required: true
    },
})