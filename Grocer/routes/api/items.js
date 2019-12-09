const express = require('express');
const router = express.Router();

// Items model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Add an Items
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });

    newItem.save()
        .then(item => res.json(item));
});

// @route   DELETE api/items
// @desc    Delete an Items
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(400).json({
            success: false
        }));
});

module.exports = router;