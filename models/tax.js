const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const taxScheme = new mongoose.Schema({
    taxCategory: {
        type: ObjectId,
        ref: "TaxCategory",
        required: true
    },
    netAmount: {
        type: Number,
        required: false,
    },
    taxRate: {
        type: Number,
        required: false,
    },
    taxAmount: {
        type: Number,
        required: false,
    },
    grossAmount:{ 
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
    taxRateName: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model('Tax', taxScheme);
