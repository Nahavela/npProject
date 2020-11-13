const express = require('express');
const router = express.Router();
const Score = require('../../models/Score');
const scoreCtrl = require('../../controllers/backend/score');
const auth = require('../../middleware/auth');



router.post('/',  scoreCtrl.createScore);
router.get('/',  scoreCtrl.getAllStuff);
router.get('/:id',  scoreCtrl.getOneScore);
router.post('/:id/:k/:i', scoreCtrl.modifyScore );
router.delete('/:id', scoreCtrl.deleteScore );

module.exports = router;
