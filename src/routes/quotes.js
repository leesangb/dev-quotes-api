const express = require('express');
const Quotes = require('../store/Quotes');
const path = require('path');

const router = express.Router();

const paths = [
    { lang: '', keys: ['en', 'ko'] },
    { lang: 'en', keys: ['en'] },
    { lang: 'ko', keys: ['ko'] },
];

paths.forEach(({ lang, keys }) => {
    const quotes = keys.reduce((acc, key) => acc.concat(Quotes[key]), []);

    // /quotes/<lang>
    router.get(`/${path.join('quotes', lang)}`, (req, res) => {
        res.json(quotes);
    });

    // /quotes/<lang>/random
    router.get(`/${path.join('quotes', lang, 'random')}`, (req, res) => {
        if (quotes.length === 0) {
            res.status(404).send('not found');
        }
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(randomQuote);
    });
});

module.exports = router;
