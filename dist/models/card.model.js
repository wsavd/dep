'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardSchema = _mongoose2.default.Schema({
        title: {
                type: String
        },
        text: {
                type: String
        },
        manager: {
                type: String
        },
        developer: {
                type: String
        },
        createdAt: {
                type: Date,
                default: Date.now
        },
        boardId: {
                type: String
        },
        columnId: {
                type: String
        }
}, { versionKey: false });

exports.default = _mongoose2.default.model('Card', cardSchema);