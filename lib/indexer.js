var helpers = require('./helpers');
var range = helpers.rangeRepeated;
var rangeRandom = helpers.rangeRandom;

var Chance = require('chance');


/* jshint asi:false */
function IndexerFactory(seed) {
    var chance = Chance(seed);
    
    this.Indexer = function* (number, repeat, random, shuffle) {
        var indexes = (random ? rangeRandom(number, repeat, seed) : range(1, number, repeat));
        if (shuffle === true) {
            indexes = chance.shuffle(indexes);
        }

        while(indexes.length > 0) {
            yield indexes.shift();
        }
    };
}

module.exports = IndexerFactory;


