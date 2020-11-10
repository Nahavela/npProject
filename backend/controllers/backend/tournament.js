const Tournament = require('../../models/Tournament');
const myModule = require('../../public/js/createGroup');
const Score = require('../../models/Score');

/*exports.createTournament =  (req, res, next) => {


	const tournament = new Tournament({
		...req.body,
		group : myModule.split(req.body.team, req.body.numberOfGroup),
		
	});

	tournament.save()
		.then(() => res.status(201).json({ message: 'Objet enregistré !' }))
		.catch((error) => res.status(400).json({ error }));

};*/

exports.createTournament = async (req, res, next) => {

try {
	const tournament = new Tournament({
		...req.body,
		group : myModule.split(req.body.team, req.body.numberOfGroup),
		
	});



	const score = new Score({
		_id: tournament.id,
		team: myModule.createTeam(req.body.team),
		group : tournament.group,
		match : myModule.createMatch(tournament.group) ,
		schedule : myModule.schedule(tournament.time, tournament.timeOfMatch, tournament.timeBetweenMatch, myModule.createMatch(tournament.group) )

	});

	tournament.save()
	score.save()
		.then(() => res.status(200).redirect('/'))

}catch{
	res.status(400).json({ error })
}


	


};

exports.getAllStuff = (req, res, next) => {
    Tournament.find()
    .then((Tournaments) => res.status(200).json(Tournaments))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneTournament = (req, res, next) => {
	Tournament.findOne({ _id: req.params.id })
		.then((Tournament) => res.status(200).json(Tournament))
		.catch((error) => res.status(404).json({ error }));
};

exports.modifyTournament = (req, res, next) => {
	Tournament.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet modifié !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteTournament = (req, res, next) => {
	Tournament.deleteOne({ _id: req.params.id })
		.then(() => res.status(200))
		.catch((error) => res.status(400).json({ error }));
	Score.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).redirect('/'))
		.catch((error) => res.status(400).json({ error }));
};




