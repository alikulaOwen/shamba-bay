const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser())
 
const products = require('./routes/product');
const users = require('./routes/user');
const order = require('./routes/order')
const errorMiddleware = require('./middlewares/errors')

app.use('/api/v1/', products);
app.use('/api/v1/', users);
app.use('/api/v1', order);

//middleware handling errors

app.use(errorMiddleware);

module.exports = app;
