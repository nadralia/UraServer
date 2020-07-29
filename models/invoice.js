const mongoose = require('mongoose');

const invoiceScheme = new mongoose.Schema({
       invoiceNo:  {
        type: Number,
        required: true,
       },
       oriInvoiceId:  {
        type: Number,
        required: true,
        },
       oriInvoiceNo:  {
        type: Number,
        required: false,
        },
       issuedDate: {
        type: String,
        required: false,
        },
       buyerTin:  {
        type: Number,
        required: false,
       },
       buyerLegalName: {
        type: String,
        required: true,
        },
       buyerNinBrn:  {
        type: String,
        required: false,
       },
       currency: {
        type: String,
        required: false,
        },
       grossAmount : {
        type: Number,
        required: false,
        },
       taxAmount :  {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
       dataSource:  {
        type: Number,
        required: false,
    },
       isInvalid:  {
        type: Number,
        default: 0
    },
       isRefund:  {
        type: Number,
        default: 0
    },
       invoiceType:  {
        type: Number,
        default: 0
    },
       invoiceKind:  {
        type: Number,
        default: 0
       },
       startDate:  {
        type: String,
        required: false,
       },
       endDate:  {
        type: String,
        required: false,
       },
       pageNo:  {
        type: Number,
        required: false,
        },
       pageSize:  {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    }
    
},
{ timestamps: true }
);

module.exports = mongoose.model('Invoice', invoiceScheme);
