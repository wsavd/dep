'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = require('../models/card.model');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function read(req, res) {
  _card2.default.find().then(function (results) {
    return res.json(results);
  });
}

function create(req, res) {
  var Card = new Card({
    title: req.body.title
  });
  Card.save().then(function (savedCard) {
    return res.json(savedCard);
  });
}

function readSingle(req, res) {
  _card2.default.findOne({ _id: req.params.id }).then(function (results) {
    return res.json(results);
  });
};

function update(req, res) {
  var body = req.body;
  _card2.default.update({ _id: req.params.id }, { $set: body }).then(function (results) {
    return res.json(results);
  }).catch(function (e) {
    return next(e);
  });
};

function remove(req, res) {
  var query = { _id: [req.params.id] };
  _card2.default.remove(query).then(function (deleted) {
    return res.json(deleted);
  }).catch(function (e) {
    return next(e);
  });
};
//search on user
/*
function echo(req, res) {
  //let title= req.body.title
  res.json(req.body)
  /*Card.find({title: req.body.title})
    .then(results => res.json(results))*/

exports.default = { read: read, readSingle: readSingle, create: create, update: update, remove: remove };