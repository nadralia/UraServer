const express = require('express');
const router = express.Router();

const { create, invoiceById, read, update, applyForInvoiceInquiry, list, applyInvoice } = require('../controllers/invoice');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/invoice/:invoiceId', read);
router.post('/invoice/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put('/invoice/:invoiceId/:userId', requireSignin, isAuth, isAdmin, update);

router.post('/invoice/apply', requireSignin, applyInvoice);
router.get('/invoices', list);

router.param('invoiceId', invoiceById);
router.param('userId', userById);

module.exports = router;
