const express = require('express');
const quotes = require('./routes/quotes');

const app = express();
const port = 3000;

app.use(quotes);

app.use((req, res) => {
    console.log(`404 ${req.method} ${req.url}`);
    res.status(404).send('not found');
});

app.listen(port, () => {
    console.log(`👂 Server listening on port: ${port}`);
});

module.exports = app;
