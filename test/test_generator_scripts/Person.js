var Chance = require('chance');
var chance = new Chance();
var normalChance = new Chance(function () {
    //Approximate normal distribution between 0 and 1
    return (Math.random() + Math.random() + Math.random() +
        Math.random() + Math.random() + Math.random()) / 6;
});


module.exports = {
    index: {
        number: 1,
        perParent: 1,
        random: false,
        shuffle: true
    },
    generator: function (index, parentIndex) {
        var self = {};

        self.idPerson = index;
        self.idParent = parentIndex;
        self.sex = chance.integer({min: 0, max: 1});
        self.firstName = chance.first({gender: (self.sex ? 'female' : 'male')});
        self.lastName = chance.last();
        return self;
    }
};