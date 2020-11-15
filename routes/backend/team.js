const express = require('express');
const router = express.Router();
const Team = require('../../models/Team');
const teamCtrl = require('../../controllers/backend/team');
const auth = require('../../middleware/auth');



router.post('/',  teamCtrl.createTeam);
router.get('/',  teamCtrl.getAllStuff);
router.get('/:id/:index',  teamCtrl.getOneTeam);
router.get('/:id',  teamCtrl.getTeams);
router.post('/:id', teamCtrl.modifyTeam );
router.delete('/:id', teamCtrl.deleteTeam );

module.exports = router;
