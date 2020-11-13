const express = require('express');
const router = express.Router();
const Team = require('../../models/Team');
const teamCtrl = require('../../controllers/backend/team');
const auth = require('../../middleware/auth');



router.post('/',  teamCtrl.createTeam);
router.get('/',  teamCtrl.getAllStuff);
router.get('/:index',  teamCtrl.getOneTeam);
router.post('/0/:id', teamCtrl.modifyTeam0 );
router.post('/1/:id', teamCtrl.modifyTeam1 );
router.delete('/:id', teamCtrl.deleteTeam );

module.exports = router;
