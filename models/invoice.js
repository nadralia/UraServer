const mongoose = require('mongoose');

const invoiceScheme = new mongoose.Schema({
    invoiceId: {
       type: Number,
        required: true,
        minlength:5,
        maxlength:20
    },
    invoiceNo: {
        type: Number,
        required: true,
        minlength:5,
        maxlength:20
    },
    oriInvoiceNo: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    antifakeCode: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    deviceNo: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    issuedDate: {
        type: Date,
        required: false,
        minlength:5,
        maxlength:20
    },
    oriIssuedDate: {
        type: Date,
        required: false,
        minlength:5,
        maxlength:20
    },
    oriGrossAmount: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
   operator: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
   },
   currency: {
        type: String,
        required: false,
        minlength:5,
        maxlength:20
   },
   oriInvoiceId: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
   },
   invoiceType: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
   },
   invoiceKind: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
   },
   dataSource: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
   },
   isInvalid: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
   },
   isRefund: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
   }
    
});

module.exports = mongoose.model('Invoice', invoiceScheme);
