'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columnSchema = _mongoose2.default.Schema({
    title: {
        type: String
    },
    boardId: {
        type: String
    }
}, { versionKey: false });

exports.default = _mongoose2.default.model('Column', columnSchema);