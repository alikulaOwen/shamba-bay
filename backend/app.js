const express = require('express');
const app = express();

app.use(express.json());

const products = require('./routes/product');
const users = require('./routes/user');


app.use('/api/v1/', products);
app.use('/api/v1/', users);

module.exports = app;