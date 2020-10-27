const express = require('express');
const router = express.Router();
const Tournament = require('../models/Tournament');
const shopCtrl = require('../controllers/tournament');
const auth = require('../middleware/auth');



router.post('/', auth, shopCtrl.createTournament);
router.get('/', auth, shopCtrl.getAllStuff);
router.get('/:id', auth, shopCtrl.getOneTournament);
router.put('/:id', auth, shopCtrl.modifyTournament );
router.delete('/:id', auth, shopCtrl.deleteTournament );

module.exports = router;
