var CliParser = require(__dirname + '/../lib/cliParser.js');

describe("When testing the command line interface parser", function () {
    it("displays help if no arguments are passed", function () {
        var opts = (new CliParser([],0)).parse();
        expect(opts).to.deep.equal({help: true});
    });
    it("defaults to an output dir in the cwd if none is given", function () {
        var opts = (new CliParser(['a_schema'], 0)).parse();
        expect(opts).to.have.property('output').that.equals(process.cwd() + '/output');
    });
    it("interprets first arg as schema and second as output if no switches given", function () {
        var opts = (new CliParser(['a_schema', 'the_output'], 0)).parse();
        expect(opts).to.have.property('schema').that.equals(process.cwd() + '/a_schema');
        expect(opts).to.have.property('output').that.equals(process.cwd() + '/the_output');
    });
});