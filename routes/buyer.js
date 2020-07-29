const express = require('express');
const router = express.Router();

const { create, buyerById, read, update, remove, list } = require('../controllers/buyer');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/buyer/:buyerId', read);
router.post('/buyer/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put('/buyer/:buyerId/:userId', requireSignin, isAuth, isAdmin, update);

router.delete('/buyer/:buyerId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/buyers', list);

router.param('buyerId', buyerById);
router.param('userId', userById);

module.exports = router;
