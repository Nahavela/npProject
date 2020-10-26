const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const shopCtrl = require('../controllers/shop');
const auth = require('../middleware/auth');



router.post('/', auth, shopCtrl.createTeam);
router.get('/', auth, shopCtrl.getAllStuff);
router.get('/:id', auth, shopCtrl.getOneTeam);
router.put('/:id', auth, shopCtrl.modifyTeam );
router.delete('/:id', auth, shopCtrl.deleteTeam );

module.exports = router;
