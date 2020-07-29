const Buyer = require('../models/buyer');
const Item = require('../models/item');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.buyerById = (req, res, next, id) => {
    Buyer.findById(id).exec((err, buyer) => {
        if (err || !buyer) {
            return res.status(400).json({
                error: 'Buyer does not exist'
            });
        }
        req.buyer = buyer;
        next();
    });
};

exports.create = (req, res) => {
    const buyer = new Buyer(req.body);
    buyer.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.buyer);
};

exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('buyer update param', req.params.buyerId);

    const buyer = req.buyer;
    buyer.name = req.body.name;
    buyer.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const buyer = req.buyer;
    Item.find({ buyer }).exec((err, data) => {
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete ${buyer.name}. It has ${data.length} associated items.`
            });
        } else {
            buyer.remove((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json({
                    message: 'Item deleted'
                });
            });
        }
    });
};

exports.list = (req, res) => {
    Buyer.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
