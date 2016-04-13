var nopt = require('nopt');
var path = require('path');
var opts = require('./options');

function CliParser(argv, slice) {
    this.argv = argv;
    this.slice = slice;

    var _this = this;

    var options = (function (optsFile) {
        var aliases = {};
        var known = {};
        var descriptions = {};
        Object.keys(optsFile).forEach(function(key) {
            var short = optsFile[key].short;
            if (short) {
                aliases[short] = '--' + key;
            }
            known[key] = optsFile[key].type;
            descriptions[key] = optsFile[key].info;
        });
        return {
            known: known,
            aliases: aliases,
            descriptions: descriptions
        };
    })(opts);

    this.known = options.known;
    this.aliases = options.aliases;
    this.descriptions = options.descriptions;

    
    var parseOptions = function () {
        var parsed = nopt(options.known, options.aliases, _this.argv, _this.slice);
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
    
    this.parsedOptions = parseOptions();
}

module.exports = CliParser;