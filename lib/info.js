module.exports = {
    help: function (usage) {
        [
            'Sequelize seeder',
            usage
        ].forEach(function(str) {console.log(str);});
    }
};