require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express');

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('error', (error) => console.log('Connected to database'));

app.use(express.json())

const hbRouter = require('./routers/hbRouter')
app.use('/', hbRouter)

const userRouter = require('./routers/users')
app.use('/users', userRouter)

const orderRouter = require('./routers/orders')
app.use('/orders', orderRouter)

app.get('/login')

const PORT = 9000;
app.listen(PORT);
console.log(`Listening to port ${PORT}`);