import express from 'express';
const router = express.Router();

import boardCtrl from '../controllers/board.controller'

//GET /api/v1/boards - Get list of boards
router.get('/boards', boardCtrl.read);
//GET /api/v1/board/:id - Get specific board
router.get('/board/:id', boardCtrl.readSingle);

//POST /api/v1/board - Create a new board
router.post('/board', boardCtrl.create);

//PUT /api/v1/board/:id - Update specific board
router.put('/board/:id', boardCtrl.update)

//DELETE /api/v1/board/:id - Delete specific board
router.delete('/board/:id', boardCtrl.remove);

router.get('/board/:id/columns', boardCtrl.columnsOfBoard);

export default router;