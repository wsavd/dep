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

//GET /api/v1/cards - Get list of cards
router.get('/cards', _card2.default.read);
//GET /api/v1/cards/:id - Get specific card
router.get('/card/:id', _card2.default.readSingle);

//POST /api/v1/cards - Create a new card
router.post('/card', _card2.default.create);

//PUT /api/v1/cards/:id - Update specific card
router.put('/card/:id', _card2.default.update);

//DELETE /api/v1/cards/:id - Delete specific card
router.delete('/card/:id', _card2.default.remove);

exports.default = router;