'use strict';

module.exports = function(env) {
    return require('./configs/webpack.config.' + env + '.js')({
        env: env
    });
};