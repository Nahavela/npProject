const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const teamCtrl = require('../controllers/team');
const auth = require('../middleware/auth');



router.post('/', auth, teamCtrl.createTeam);
router.get('/', auth, teamCtrl.getAllStuff);
router.get('/:id', auth, teamCtrl.getOneTeam);
router.put('/:id', auth, teamCtrl.modifyTeam );
router.delete('/:id', auth, teamCtrl.deleteTeam );

module.exports = router;
