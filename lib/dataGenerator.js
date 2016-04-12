var helpers = require(__dirname + '/helpers');
var range = helpers.range;

function dataGenerator(script, n) {
    if (typeof script.generator !== 'function') {
        return null;
    }

    n = n * script.multiple;
    var strategy = script.strategy;

    var indexes = range(1,n);
    var index;
    var data = [];
    for (var i = 0; i < n; i++ ) {
        if (strategy === 'increment') {
            index = i + 1;
        }
        else if (strategy === 'random') {

        }
        data.push(script.generator(index));
    }

    return data;
}

module.exports = dataGenerator;