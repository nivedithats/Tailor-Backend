const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    desc:{
        type:String,
        required:true
    },

    rating:{
        type:String,
        required:true
    },

    image: {
        type:String,
        required:true
    },

})

const productsdatabse = mongoose.model('productsDatabase', productSchema);
module.exports = productsdatabse;
