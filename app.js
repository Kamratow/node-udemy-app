const express = require('express');

const app = express();

app.use('/add-product', (req, res) => {
  res.send(
    '<form action="/product" method="POST"><input type="text"><button type="submit">Add Product</button></form>'
  );
});

app.use('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res) => {
  res.send('<h1>Hello!</h1>');
});

app.listen(3000);
