const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
        required: true,
        unique: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Category", categorySchema)