'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _column = require('../controllers/column.controller');

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//GET /api/v1/columns - Get list of columns
router.get('/columns', _column2.default.read);
//GET /api/v1/columns/:id - Get specific column
router.get('/column/:id', _column2.default.readSingle);

//POST /api/v1/columns - Create a new column
router.post('/column', _column2.default.create);

//PUT /api/v1/columns/:id - Update specific column
router.put('/column/:id', _column2.default.update);

//DELETE /api/v1/columns/:id - Delete specific column
router.delete('/column/:id', _column2.default.remove);

router.get('/column/:id/cards', _column2.default.cardsOfColumns);

exports.default = router;