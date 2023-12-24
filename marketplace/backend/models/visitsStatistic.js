const mongoose = require('mongoose')

const visitStatisticSchema = new mongoose.Schema({
    page_url : {
        type: String,
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
})
module.exports = mongoose.model("VisitStatistic", visitStatisticSchema)
