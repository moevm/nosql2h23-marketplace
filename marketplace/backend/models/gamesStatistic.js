const mongoose = require('mongoose')

const gameStatisticSchema = new mongoose.Schema({
    game_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },

    login : {
        type: String,
        required: true
    },
    created_at : {
        type: Number,
        required: true,
        default: Date.now
    },
    action : {
        type: String,
        required: true
    },
})
module.exports = mongoose.model("GameStatistic", gameStatisticSchema)