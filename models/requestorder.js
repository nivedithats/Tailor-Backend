const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    ProductName:{
        type:String,
        required:true
    },
    ProductImg:{
        type:String,
        required:true
    },
    Prize:{
        type:String,
        required:true
    },
    Quality:{
        type:String,
        required:true   
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    }
})

const RequestDatabase = mongoose.model('RequestDatabase',RequestSchema);

module.exports = RequestDatabase;