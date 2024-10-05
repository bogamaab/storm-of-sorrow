const mongoose = require('mongoose');
const inventorySchema = mongoose.Schema({
    beerName: {
        type: String,
        require: true
    },
    beerType: {
        type: String,
        require: true
    },
    alcoholContent: {
        type: Number,
        require: true
    },
    purchaseDate: {
        type: Date,
        require: true
    },
    barrelCapacity: {
        type: Number,
        require: true
    },
    emptyingDate: {
        type: Date,
        require: true
    },
    breweryHouse: {
        type: String,
        require: true
    }

});

module.exports = mongoose.model('Inventory', inventorySchema);
