const mongoose = require('mongoose');

const Customer = mongoose.model('Customer',{
    Name:{
        type: String
    },

    Address:{
        type: String
    },
    Phone_No:{
        type: String
    },
    Gender:{
        type:String
    },
   
})

module.exports = Cutomer ;