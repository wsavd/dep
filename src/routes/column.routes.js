import express from 'express';
const router = express.Router();

import columnCtrl from '../controllers/column.controller'

//GET /api/v1/columns - Get list of columns
router.get('/columns', columnCtrl.read);
//GET /api/v1/columns/:id - Get specific column
router.get('/column/:id', columnCtrl.readSingle);

//POST /api/v1/columns - Create a new column
router.post('/column', columnCtrl.create);

//PUT /api/v1/columns/:id - Update specific column
router.put('/column/:id', columnCtrl.update)

//DELETE /api/v1/columns/:id - Delete specific column
router.delete('/column/:id', columnCtrl.remove);

router.get('/column/:id/cards', columnCtrl.cardsOfColumns);

export default router;