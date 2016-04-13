var helpers = require(__dirname + '/../lib/helpers');

describe("When testing helpers", function (){
    it("calling range(start,end) should produce an array going from start to end inclusive", function () {
        var range = helpers.range(1,5);
        expect(range).to.deep.equal([1,2,3,4,5]);
    });
    it("calling rangeRepeated(start, end, multiple) should produce an array from start to end with each element " +
        "repeated multiple times", function () {
        var range = helpers.rangeRepeated(2,5,3);
        expect(range).to.deep.equal([2,3,4,5,2,3,4,5,2,3,4,5]);
    });
    it("calling rangeRepeated with multiple of 1 should be the same as range", function () {
        var start = 3;
        var end = 7;
        var range = helpers.range(start,end);
        var rangeRepeated = helpers.rangeRepeated(start,end,1);
        expect(range).to.deep.equal([3,4,5,6,7]);
        expect(range).to.deep.equal(rangeRepeated);
    });
    it("calling rangeRandom with (3,2,1338) should return 6 numbers between 1 and 3", function () {
        var range = helpers.rangeRandom(3,2,1338);
        expect(range).to.deep.equal([2,3,3,1,1,2]);
    })
});