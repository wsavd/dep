'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _board = require('../controllers/board.controller');

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//GET /api/v1/boards - Get list of boards
router.get('/boards', _board2.default.read);
//GET /api/v1/board/:id - Get specific board
router.get('/board/:id', _board2.default.readSingle);

//POST /api/v1/board - Create a new board
router.post('/board', _board2.default.create);

//PUT /api/v1/board/:id - Update specific board
router.put('/board/:id', _board2.default.update);

//DELETE /api/v1/board/:id - Delete specific board
router.delete('/board/:id', _board2.default.remove);

router.get('/board/:id/columns', _board2.default.columnsOfBoard);

exports.default = router;