const Team = require('../../models/Team');

exports.createTeam = (req, res, next) => {
	const Team = new Team({
		...req.body
	});
	Team
		.save()
		.then(() => res.status(201).json({ message: 'Objet enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getAllStuff = (req, res, next) => {
    Team.find()
    .then((Teams) => res.status(200).json(Teams))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneTeam = (req, res, next) => {
	Team.findOne({ _id: req.params.id })
		.then((Team) => res.status(200).json(Team))
		.catch((error) => res.status(404).json({ error }));
};

exports.modifyTeam = (req, res, next) => {
	Team.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet modifié !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteTeam = (req, res, next) => {
	Team.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};




