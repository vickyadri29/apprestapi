'use strict';

var response = require('./res');
var connection = require('./connect');

exports.index = function(req, res){
    response.ok('App REST API is Running')
};