const Invoice = require('../models/invoice');

exports.invoiceById = (req, res, next, id) => {
    Invoice.findById(id).exec((err, invoice) => {
        if (err || !invoice) {
            return res.status(400).json({
                error: 'Invoice does not exist'
            });
        }
        req.invoice = invoice;
        next();
    });
};

exports.create = (req, res) => {
    const invoice = new Invoice(req.body);
    invoice.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.invoice);
};

exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('Invoice update param', req.params.invoiceId);

    const invoice = req.invoice;
    invoice.invoiceNo = req.body.invoiceNo;
    invoice.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.list = (req, res) => {
    Invoice.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

// Apply for invoice inquiry

exports.applyForInvoiceInquiry = async (req, res) => {

    // Retrieve the invoiceNo from request body
    const invoiceNo = req.body.invoiceNo;
    const buyerTin  = req.body.buyerTin;

    console.log('########',invoiceNo)
    const invoice = await Invoice.find({where: { invoiceNo: invoiceNo, buyerTin:buyerTin }
        ,attributes: ['id', 'invoiceNo', 'buyerTin', 'createdAt', 'updatedAt']});

    console.log('******',res.body)
    res.status(200).json({ status: 200, invoice });
};

exports.applyInvoice = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Invoice.find({ invoiceNo: req.body.invoiceNo, buyerTin: req.body.buyerTin, invoiceType: req.body.invoiceType })
        .exec((err, invoices) => {
            if (err) {
                return res.status(400).json({
                    error: 'Invoices not found'
                });
            }
            res.json(invoices);
        });
};