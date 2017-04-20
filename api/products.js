var vk = require('./vk');

function get(req, res) {
    vk.getCommunityItems()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(400).send(error);
        });
}

exports.get = get;