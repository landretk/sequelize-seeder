var nopt = require('nopt');
var path = require('path');
var opts = require('./options');


function CliParser(argv, slice) {
    this.argv = argv;
    this.slice = slice;
}

CliParser.prototype.parse = function () {
    var aliases = {};
    var known = {};
    Object.keys(opts).forEach(function(key) {
        var short = opts[key].short;
        if (short) {
            aliases[short] = '--' + key;
        }
        known[key] = opts[key].type;
    });

    var parsed = nopt(known, aliases, this.argv, this.slice);
    var remaining = parsed.argv.remain;
    delete parsed.argv;

    if (Object.keys(parsed).length === 0) {
        if (remaining.length === 0) {
            parsed['help'] = true;
        }
        else if (remaining.length >= 1) {
            parsed['schema'] = path.resolve(remaining[0]);
            if (remaining.length >= 2) {
                parsed['output'] = path.resolve(remaining[1]);
            }
        }
    }

    if (parsed['help'] === true) {
        return parsed;
    }

    if (!parsed['schema']) {
        parsed['schema'] = process.cwd();
    }
    if (!parsed['output']) {
        parsed['output'] = process.cwd() + '/output';
    }
    if (!parsed['number']) {
        parsed['number'] = 1;
    }

    return parsed;
};

module.exports = CliParser;