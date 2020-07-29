const mongoose = require('mongoose');

const buyerScheme = new mongoose.Schema({
    buyerTin:  {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    buyerNinBrn: { 
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    buyerPassportNum : {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    buyerLegalName:{ 
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    buyerBusinessName: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    buyerAddress: {
        type: String,
        required: false,
        minlength:5,
        maxlength:20
    },
    buyerEmail: {
        type: String,
        required: false,
        minlength:5,
        maxlength:20
    },
    buyerMobilePhone:{ 
        type: Number,
        required: false
    },
    buyerLinePhone: {
        type: Number,
        required: false
    },
    buyerPlaceOfBusi: {
        type: String,
        required: false,
    },
    buyerType: {
        type: Number,
        required: false,
    },
    buyerCitizenship: {
        type: Number,
        required: false,
    },
    buyerSector:{
        type: Number,
        required: false,
    },
    buyerReferenceNo: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model('Buyer', buyerScheme);
