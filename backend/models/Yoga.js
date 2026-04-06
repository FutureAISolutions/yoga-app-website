const mongoose = require("mongoose");

const yogaSchema = new mongoose.Schema({
    name: String,
    category: String,
    image: String,
    description: String,
    tips: String
});

module.exports = mongoose.model("Yoga", yogaSchema);