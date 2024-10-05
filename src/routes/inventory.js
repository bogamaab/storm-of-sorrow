const express = require('express');
const router = express.Router();
const inventorySchema = require('../models/inventory')

router.get('/inventory', (_, res) => {
    inventorySchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

router.post('/inventory', (req, res) => {
    const inventory = inventorySchema(req.body);
    inventory
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json(error));
})

router.put('/inventory/:id', (req, res) => {
    const { id } = req.params;
    const { beerName, beerType, alcoholContent, purchaseDate, barrelCapacity, emptyingDate, breweryHouse } = req.body

    inventorySchema
        .updateOne({_id: id},{
            $set: ({ beerName, beerType, alcoholContent, purchaseDate, barrelCapacity, emptyingDate, breweryHouse })
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.delete('/inventory/:id', (req, res) => {
    const { id } = req.params;

    inventorySchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
