var Chance = require('chance');
var chance = new Chance();
var IndexerFactory = require('./indexer');
var Indexer = new IndexerFactory().Indexer;
var helpers = require(__dirname + '/helpers');

function dataGenerator(script, base) {
    if (typeof script.generator !== 'function') {
        return null;
    }

    var indexerOpts = script.index;

    var indexer = Indexer(indexerOpts.number * indexerOpts.perParent * base);
    var parentIndexer = Indexer(indexerOpts.number * base, indexerOpts.perParent, indexerOpts.random, indexerOpts.shuffle);

    var index = indexer.next();
    var parentIndex = parentIndexer.next();
    var data = [];
    while (index.done !== true) {
        data.push(script.generator(index.value, parentIndex.value));

        index = indexer.next();
        parentIndex = parentIndexer.next();
    }

    return data;
}

module.exports = dataGenerator;