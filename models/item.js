const mongoose = require('mongoose');

const itemScheme = new mongoose.Schema({
    item: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    itemCode: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    qty: {
        type: Number,
        required: false,
    },
    unitOfMeasure: {
        type: String,
        required: false,
        minlength:5,
        maxlength:20
    },
    unitPrice: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    total: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    taxRate: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    tax: {
        type:Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    discountTotal: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    discountTaxRate: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    orderNumber: {
        type: Number,
        required: false,
        minlength:5,
        maxlength:20
    },
    discountFlag: {
        type: Number,
        required: false
    },
    deemedFlag: {
        type: Number,
        required: false
    },
    exciseFlag: {
        type: Number,
        required: false
    },
    categoryId: {
        type: Number,
        required: false
    },
    exciseRate: {
        type: Number,
        required: false,
    },
    exciseRule: {
        type: Number,
        required: false,
    },
    exciseTax: {
        type: Number,
        required: false,
    },
    pack: {
        type: Number,
        required: false,
    },
   stick: {
        type: Number,
        required: false,
   },
   exciseUnit: {
        type: Number,
        required: false,
   },
   exciseCurrency: {
        type: String,
        required: false,
    },
   exciseRateName: {
        type: Number,
        required: false,
   }
});

module.exports = mongoose.model('Item', itemScheme);
