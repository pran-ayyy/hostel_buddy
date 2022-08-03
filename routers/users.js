const User = require('../models/user')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/hey', (req, res) => {
    res.send('Hey there');
})

router.get('/login', (req, res) => {
    res.send('Render Login page')
})

router.post('/login', getUser, async function(req, res) {
    //Login the User
    res.send('User Logged in')
})


router.get('/signup', (req, res) => {
    res.send('Render Signup page')
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


async function getUser(req, res, next) {
    let user
    try {
        user = await User.findbyId(req.params.id)
        if (user == null) {
            return res.status(404).json({message: 'Cannot find the User'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.user = user;
    next()
}

module.exports = router