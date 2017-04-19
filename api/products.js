var vkapi = require('node-vkapi');

function getProducts(req, res) {
    var vk = new vkapi({
        app: {
            id: 0,
            secret: 'SECRET'
        },
        auth: {
            login: 'LOGIN',
            pass: 'PASSWORD'
        },
        version: '5.63'
    });

    vk.auth
        .user({
            scope: ['market']
        })
        .then(token => {
            vk.call('market.get', {
                owner_id: -114453626,
                count: 100,
                extended: 1,
                access_token: token.access_token
            })
            .then(result => {
                res.json(result);
            })
            .catch(error => {
                res.json(error);
            });
        })
        .catch(error => {
            res.json(error);
        });
}

module.exports = {
    getProducts
};