const express = require('express');
const router = express.Router();
const Team = require('../../models/Score');
const teamCtrl = require('../../controllers/backend/score');
const auth = require('../../middleware/auth');



router.post('/',  teamCtrl.createScore);
router.get('/',  teamCtrl.getAllStuff);
router.get('/:id',  teamCtrl.getOneScore);
router.put('/:id', teamCtrl.modifyScore );
router.delete('/:id', teamCtrl.deleteScore );

module.exports = router;
