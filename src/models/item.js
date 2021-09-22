const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    price: Number,
    status: Boolean
});

module.exports = mongoose.model('items', itemSchema);