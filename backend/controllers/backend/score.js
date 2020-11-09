const Score = require('../../models/Score');

exports.createScore = (req, res, next) => {
	const Score = new Score({
		...req.body
	});
	Score
		.save()
		.then(() => res.status(201).json({ message: 'Objet enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getAllStuff = (req, res, next) => {
    Score.find()
    .then((Scores) => res.status(200).json(Scores))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneScore = (req, res, next) => {
	Score.findOne({ _id: req.params.id })
		.then((Score) => res.status(200).json(Score))
		.catch((error) => res.status(404).json({ error }));
};

exports.modifyScore = (req, res, next) => {
	Score.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet modifié !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteScore = (req, res, next) => {
	Score.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};




