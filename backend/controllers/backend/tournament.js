const Tournament = require('../../models/Tournament');
const myModule = require('../../public/js/createGroup');

exports.createTournament = (req, res, next) => {
	const tournament = new Tournament({
		...req.body,
		group : myModule.split(req.body.team, req.body.numberOfGroup),
	});
	tournament.save()
		.then(() => res.status(201).json({ message: 'Objet enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
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
		.then(() => res.status(200).json({ message: 'Objet supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};




