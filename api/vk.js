var vkapi = require('node-vkapi');

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

var authorizationDate = null;
var authorizationToken = null;

var millisecondsInSecond = 1000;
function needsAuthorization() {
    return !authorizationDate || !authorizationToken || 
        authorizationDate + authorizationToken.expires_in * millisecondsInSecond < Date.now();
}

function authorize() {
    return vk.auth
        .user({
            scope: ['market']
        })
        .then(token => {
            authorizationDate = Date.now();
            authorizationToken = token;
        })
}

function getCommunityItems() {
    return needsAuthorization()
        ? authorize().then(vkMarketGet)
        : vkMarketGet();
}

function vkMarketGet() {
    return vk.call('market.get', {
        owner_id: -114453626,
        count: 100,
        extended: 1,
        access_token: authorizationToken.access_token
    });
}

exports.getCommunityItems = getCommunityItems;