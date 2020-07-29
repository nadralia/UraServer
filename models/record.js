const mongoose = require('mongoose');

const recordScheme = new mongoose.Schema({
    invoiceNo:{
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    deviceNo: {
        type: Number,
        required: false
    },
    buyerTin: {
        type: String,
        required: false
    },
    buyerLegalName:{
        type:String,
        required: false
    },
    invoiceType: {
        type:String,
        required: false
    },
    startDate: {
        type:String,
        required: false
    },
    endDate: {
        type:String,
        required: false,
        minlength: 6,
        maxlength: 150
    },
    pageNo: {
        type: Number,
        required: true
    },
    pageSize: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model('Record', recordScheme);
