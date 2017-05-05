import express from 'express';
const router = express.Router();

import cardCtrl from '../controllers/card.controller'

//GET /api/v1/cards - Get list of cards
router.get('/cards', cardCtrl.read);
//GET /api/v1/cards/:id - Get specific card
router.get('/card/:id', cardCtrl.readSingle);

//POST /api/v1/cards - Create a new card
router.post('/card', cardCtrl.create);

//PUT /api/v1/cards/:id - Update specific card
router.put('/card/:id', cardCtrl.update)

//DELETE /api/v1/cards/:id - Delete specific card
router.delete('/card/:id', cardCtrl.remove);

export default router;
