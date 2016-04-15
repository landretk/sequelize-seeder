var Path = require('path');

module.exports = {
    help: {
        short: 'h',
        info: 'Display this help text.',
        type: Boolean
    },
    schema: {
        short: 's',
        info: 'Specify directory with scripts to generate data according to',
        type: Path
    },
    output: {
        short: 'o',
        info: 'Specify directory to leave output files in, defaults to ./output/',
        type: Path
    },
    number: {
        short: 'n',
        info: 'Base number of objects to generate',
        type: Number
    },
    fullOutput: {
        short: 'f',
        info: 'Output data to console',
        type: Boolean
    }
};