var Chance = require('chance');
var chance = new Chance();


module.exports = {
    index: {
        number: 1,
        perParent: 2,
        random: true,
        shuffle: false
    },
    generator: function (index, parentIndex) {
        var self = {};

        self.idCar = index;
        self.idPerson = parentIndex;
        var makeandmodel = chance.pickone([{make: 'Ford', model: 'Taurus'}, {make: 'Chevy', model: 'Malibu'}]);
        self.make = makeandmodel.make;
        self.model = makeandmodel.model;
        return self;
    }
};