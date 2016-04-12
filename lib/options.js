var Path = require('path');

module.exports = {
    help: {
        short: 'h',
        info: 'Display this help text.',
        type: Boolean
    },
    schema: {
        short: 's',
        info: 'Specify path of schemas to use for data generation, either a directory with an index.js, a plain directory, or individual files',
        type: Path
    },
    output: {
        short: 'o',
        info: 'Specify directory to leave output files in',
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