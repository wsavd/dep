'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = _mongoose2.default.Schema({
        title: {
                type: String
        },
        createdAt: {
                type: Date,
                default: Date.now
        }
}); // app/models/user.js
// load the things we need
exports.default = _mongoose2.default.model('User', userSchema);