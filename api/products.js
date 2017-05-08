var NodeCache = require('node-cache');

var vk = require('./vk');

var cache = new NodeCache({
    stdTTL: 7200 // 2 hours
});
var CACHE_KEYS = {
    PRODUCTS: 'PRODUCTS'
};

function get(req, res) {
    var cachedResult = cache.get(CACHE_KEYS.PRODUCTS);
    if (cachedResult) {
        res.json(cachedResult);
        return;
    }

    vk.getCommunityItems()
        .then(result => {
            cache.set(CACHE_KEYS.PRODUCTS, result);
            res.json(result);
        })
        .catch(error => {
            res.status(400).send(error);
        });
}

exports.get = get;
