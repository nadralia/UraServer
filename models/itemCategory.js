const mongoose = require("mongoose");

const itemCategorySchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("ItemCategory", itemCategorySchema);
