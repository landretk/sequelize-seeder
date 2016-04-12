var helpers = require(__dirname + '/../lib/helpers');

describe("When testing helpers", function (){
    it("calling range(start,end) should produce an array going from start to end inclusive", function () {
        var range = helpers.range(1,5);
        expect(range).to.deep.equal([1,2,3,4,5]);
    });
});