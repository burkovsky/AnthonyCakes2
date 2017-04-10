'use strict';

module.exports = (env) => require('./configs/webpack.config.' + env + '.js');