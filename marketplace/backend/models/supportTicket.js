const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    created_at : {
        type: Number,
        required: true,
        default: Date.now
    },
    sender_login : {
        type: String,
        required: true
    },
    text : {
        type: String,
        required: true
    },
})

const supportTicketSchema = new mongoose.Schema({
    login : {
        type: String,
        required: true
    },
    support_login : {
        type: String,
        required: true
    },

    created_at : {
        type: Number,
        required: true,
        default: Date.now
    },

    status : {
        type: String,
        required: true
    },

    description : {
        type: String,
        required: true
    },

    messages : {
        type: [messageSchema],
        required: false
    },


})

module.exports = mongoose.model("SupportTicket", supportTicketSchema)
