const bcrypt = require('bcrypt');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');



exports.getAllUser = (req, res, next) => {
    User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {
User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};

exports.modifyUser = (req, res, next) => {

	User.updateOne({ _id: req.params.id }, { ...req.body,  _id: req.params.id })
        .then(() => {
            res.status(200).redirect('/myAccount');
        }
        
        )
        
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    const token = req.cookies['token'];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
	User.deleteOne({ _id: userId })
        .then(() => 
        res.status(200).json({ message: 'Objet supprimé !' }),
        res.clearCookie('token'),
        res.redirect('/index')
        )

		.catch((error) => res.status(400).json({ error }));
};

exports.modifyPassword = (req, res, next) => {
    if (req.body.password == req.body.confirmPassword){
        if (req.body.password == req.body.oldPassword){
            return res.status(401).json({error: 'Please enter a new password'})
        }
    User.findOne({_id: req.params.id})
    .then (user => {
        if(!user) {
            return res.status(401).json({error: 'User not found'});
        }

        bcrypt.compare(req.body.oldPassword, user.password)
        .then (valid =>{
            if (!valid) {
                return res.status(401).json({error: 'Wrong password'});
            }
        
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.updateOne({ _id: req.params.id }, { password: hash, _id: req.params.id })
            .then(() => {
                res.status(200).redirect('/myAccount');
            })
            
            .catch((error) => res.status(400).json({ error }));})
    });})}else{return res.status(401).json({error: 'Password doesnt match'});}}







//exports.getEditUser = (req, res) => {res.render('pages/edit-user', {page: 'Edit info', menuId:'Home'})}
//exports.getUserInfo = (req, res) => {res.render('pages/userinfo', {page: 'Edit info', menuId:'Home'})}