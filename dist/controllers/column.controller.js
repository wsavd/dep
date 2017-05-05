'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _column = require('../models/column.model');

var _column2 = _interopRequireDefault(_column);

var _card = require('../models/card.model');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function read(req, res) {
    _column2.default.find().then(function (results) {
        return res.json(results);
    });
}

function create(req, res) {
    var column = new _column2.default({
        title: req.body.title,
        boardId: req.body.boardId
    });
    column.save().then(function (savedColumn) {
        return res.json(savedColumn);
    });
}

function readSingle(req, res) {
    _column2.default.findOne({ _id: req.params.id }).then(function (results) {
        return res.json(results);
    });
};

function update(req, res) {
    var body = req.body;
    _column2.default.update({ _id: req.params.id }, { $set: body }).then(function (results) {
        return res.json(results);
    }).catch(function (e) {
        return next(e);
    });
};

function remove(req, res) {
    var query = { _id: [req.params.id] };
    _column2.default.remove(query).then(function (deleted) {
        return res.json(deleted);
    }).catch(function (e) {
        return next(e);
    });
};
function cardsOfColumns(req, res) {
    _column2.default.findById(req.params.id, function (err, column) {
        if (err) {
            res.json({ info: 'error during find column', error: err });
        };
        if (column) {
            _card2.default.find({ columnId: req.params.id }).exec(function (err, cards) {
                res.json(cards);
            });
        } else {
            res.json({ info: 'column not found' });
        }
    });
}

exports.default = { read: read, readSingle: readSingle, create: create, update: update, remove: remove, cardsOfColumns: cardsOfColumns };