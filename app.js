const express = require('express');

const productRouter = require('./routes/productRouter');
const saleRouter = require('./routes/saleRouter');

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/sales', saleRouter);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});


module.exports = app;