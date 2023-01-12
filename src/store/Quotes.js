const en = require('../../data/en.json');
const ko = require('../../data/ko.json');

const mapId = (quotes, lang) =>
    quotes.map((quote, i) => ({ id: `${lang}-${i + 1}`, ...quote }));

module.exports = {
    en: mapId(en, 'en'),
    ko: mapId(ko, 'ko'),
};
