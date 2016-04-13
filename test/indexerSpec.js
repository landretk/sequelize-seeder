var IndexerFactory = require(__dirname + '/../lib/indexer');
var Indexer = new IndexerFactory(1338).Indexer;

describe("When testing indexer", function () {
    it("correctly creates an incrementing indexer", function () {
        var indexGen = Indexer(3);
        expect(indexGen.next().value).to.equal(1);
        expect(indexGen.next().value).to.equal(2);
        expect(indexGen.next().value).to.equal(3);
        var lastIteration = indexGen.next();
        expect(lastIteration.done).to.equal(true);
        expect(lastIteration.value).to.be.an('undefined');
    });
    it("correctly creates a random indexer", function () {
        var anotherIndexGen = Indexer(5, 1, true);
        expect(anotherIndexGen.next().value).to.equal(4);
        expect(anotherIndexGen.next().value).to.equal(4);
        expect(anotherIndexGen.next().value).to.equal(5);
        expect(anotherIndexGen.next().value).to.equal(1);
        expect(anotherIndexGen.next().value).to.equal(1);
        var lastIteration = anotherIndexGen.next();
        expect(lastIteration.value).to.be.an('undefined');
        expect(lastIteration.done).to.equal(true);
    });
});