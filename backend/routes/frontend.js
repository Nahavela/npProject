const express = require('express');
const router = express.Router();
const pageCtrl = require('../controllers/frontend');
const auth = require('../middleware/auth');


router.get('/', pageCtrl.getHome);
router.get('/index', pageCtrl.getIndex);
router.get('/about', pageCtrl.getAbout);
router.get('/gallery', pageCtrl.getGallery);
router.get('/contact-us', pageCtrl.getContact);
router.get('/my-account', auth, pageCtrl.getAccount);

router.get('/signUp', pageCtrl.getSignUp);
router.get('/login', pageCtrl.getLogin);
router.get('/logout', pageCtrl.getLogout);

router.get('/userinfo', pageCtrl.userInfoPage);
router.get('/edit-user', pageCtrl.getEditUser);
router.get('/edit-pswd', pageCtrl.getEditPswd);

router.get('/cart', pageCtrl.getCart);
router.get('/checkout', pageCtrl.getCheckout);
router.get('/shop-detail', pageCtrl.getDetail);
router.get('/shop', pageCtrl.getShop);
router.get('/wishlist', pageCtrl.getWishlist);
router.get('/addproduct', pageCtrl.getAddProduct);

module.exports = router;