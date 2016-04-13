var Chance = require('chance');

module.exports = {
    range: function (start, end) {
        return Array.apply(null, new Array(end - start + 1)).map(function (_, i) {
            return i + start;
        });
    },
    rangeRepeated: function (start, end, multiple) {
        multiple = multiple || 1;
        var period = (end - start + 1);
        return Array.apply(null, new Array(period * multiple)).map(function (_, i) {
            return (i % period) + start;
        });
    },
    rangeRandom: function (number, repeat, seed) {
        var chance = Chance(seed);
        return Array.apply(null, new Array(number*repeat)).map(function (_, i) {
            return chance.integer({min: 1, max: number});
        })
    }
};