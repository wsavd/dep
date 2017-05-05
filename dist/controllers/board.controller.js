'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _board = require('../models/board.model');

var _board2 = _interopRequireDefault(_board);

var _column = require('../models/column.model');

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function read(req, res) {
    _board2.default.find().then(function (results) {
        return res.json(results);
    });
}

function create(req, res) {
    var board = new _board2.default({
        title: req.body.title
    });
    board.save().then(function (savedBoard) {
        return res.json(savedBoard);
    });
}

function readSingle(req, res) {
    _board2.default.findOne({ _id: req.params.id }).then(function (results) {
        return res.json(results);
    });
};

function update(req, res) {
    var body = req.body;
    _board2.default.update({ _id: req.params.id }, { $set: body }).then(function (results) {
        return res.json(results);
    }).catch(function (e) {
        return next(e);
    });
};

function remove(req, res) {
    var query = { _id: [req.params.id] };
    _board2.default.remove(query).then(function (deleted) {
        return res.json(deleted);
    }).catch(function (e) {
        return next(e);
    });
};

function columnsOfBoard(req, res) {
    _board2.default.findById({ _id: req.params.id }, function (err, board) {
        if (err) {
            res.json({ info: 'error during find board', error: err });
        };
        if (board) {
            _column2.default.find({ boardId: req.params.id }, function (err, columns) {
                res.json(columns);
            });
        } else {
            res.json({ info: 'board not found' });
        }
    });
};

exports.default = { read: read, readSingle: readSingle, create: create, update: update, remove: remove, columnsOfBoard: columnsOfBoard };