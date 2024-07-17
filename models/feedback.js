const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    }
})

const feedbackDatabase = mongoose.model('feedbackDatabase',feedbackSchema);

module.exports = feedbackDatabase;