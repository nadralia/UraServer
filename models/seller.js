const mongoose = require('mongoose');

const User = require('./user');


const sellerScheme = new mongoose.Schema({
    tin: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    ninBrn: {
        type: Number,
        required: false,
    },
    passportNumber: {
        type: Number,
        required: false,
    },
    legalName: {
        type: String,
        required: false,
    },
    businessName: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    mobilePhone: {
        type: Number,
        required: false,
    },
    linePhone: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    emailAddress: {
        type: String,
        required: false,
    },
    placeOfBusiness: {
        type: String,
        required: false,
    },
    referenceNo: {
        type: Number,
        required: false
    }
    
});

module.exports = mongoose.model('Seller', sellerScheme);
