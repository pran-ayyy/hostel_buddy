const User = require('../models/user')
const Order = require('../models/order');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const orders = await Order.find();
        res.json(orders)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/placed/:id', getOrder, (req, res) => {
    res.json(res.order)
})

router.get('/delivered/:id', getOrder, (req, res) => {
    res.json(res.order)
})

async function getOrder(req, res, next) {
    let order
    try {
        order = await User.findbyId(req.params.id)
        if(order == null) {
            return res.status(404).json({message: "Cannot find the order"})
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.order = order;
    next()
} 

module.exports = router