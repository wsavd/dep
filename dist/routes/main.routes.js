'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _card = require('../controllers/card.controller');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//GET /api/v1/items - Get list of items
router.get('/items', _card2.default.read);
//GET /api/v1/items/:id - Get specific item
router.get('/items/:id', _card2.default.readSingle);

//POST /api/v1/items - Create a new item
router.post('/items', _card2.default.create);

//PUT /api/v1/items/:id - Update specific item
router.put('/items/:id', _card2.default.update);

//DELETE /api/v1/items/:id - Delete specific item
router.delete('/items/:id', _card2.default.remove);

//router.post('/echo', cardCtrl.echo);

// Exporting an object as the default import for this module
exports.default = router;