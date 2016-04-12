var Chance = require('chance');
var chance = new Chance();


module.exports = {
    multiple: 1,
    strategy: 'increment',
    generator: function (index) {
        var self = {};

        self.idPerson = index;
        self.sex = chance.integer({min: 0, max: 1});
        self.firstName = chance.first({gender: (self.sex ? 'female' : 'male')});
        self.lastName = chance.last();
        return self;
    }
};