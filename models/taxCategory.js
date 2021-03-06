const mongoose = require("mongoose");

const taxCategorySchema = new mongoose.Schema(
    {
        taxName: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("TaxCategory", taxCategorySchema);
