const Score = require('../../models/Score');
const Team = require('../../models/Team');

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

exports.modifyScore =(req, res, next) => {
	Score.updateOne({ _id: req.params.id }, {
		...req.body,
		$push: {result:  [[req.params.k,req.params.i,req.body.results]]}
	} )
	.then(() =>
	Team.updateOne({ _id: req.body.id0}, {
		point : req.body.point0,
		victory: req.body.victory0,
		lost : req.body.lost0
	} )).then(() =>
	Team.updateOne({ _id: req.body.id1}, {
		point : req.body.point1,
		victory: req.body.victory1,
		lost : req.body.lost1
	} ))

		.then(() => res.status(200).redirect(`/schedule/${req.params.id}`))
		.catch((error) => res.status(400).json({ error }));

};

exports.deleteScore = (req, res, next) => {
	Score.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};




