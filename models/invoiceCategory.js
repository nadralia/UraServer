const mongoose = require("mongoose");

const invoiceCategorySchema = new mongoose.Schema(
    {
        invoiceName: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("InvoiceCategory", invoiceCategorySchema);
