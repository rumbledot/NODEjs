const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// var Item = mongoose.model('item', ItemSchema);

// module.exports = {
//     Item: Item
// };

// another way
module.exports = Item = mongoose.model('Item', ItemSchema);