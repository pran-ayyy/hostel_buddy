const User = require('../models/user')
const Order = require('../models/order')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const express = require('express')
const router = express.router


router.get('/', function(req, res){
    res.send('Landing page');
})

router.get('/aboutUs', function(req, res) {
    res.send('About Us page');
})

router.get('/orders', function(req, res) {
    res.redirect('/orders');
})

router.get('/intro', function(req, res) {
    res.send("intro page");
})

router.get('/login', function(req, res) {
    res.send('Login page');
})

router.post('/login', urlencodedParser, function(req, res) {
    console.log(req.body);
})

router.get('/signup', function(req, res) {
    res.send('signup');
})

router.post('/signup', urlencodedParser, async function(req, res) {
    const user = new User({
        name: req.body.name,
        regno: req.body.regno
    })

    try {
        const newUser = await user.save() 
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get('/addFriends', function(req, res) {
    res.send('add friends');
})

module.exports = router