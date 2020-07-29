const express = require('express');
const router = express.Router();

const {requireSignin, isAuth, isAdmin } = require('../controllers/authentication');

const { userById, read, update} = require('../controllers/user');

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);

router.param('userId', userById);

module.exports = router;
