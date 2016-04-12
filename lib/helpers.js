module.exports = {
    range: function(start, end) {
        return Array.apply(null, Array(end - start + 1)).map(function (_, i) {
            return i + start;
        });
    }
};