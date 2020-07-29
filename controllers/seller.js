const Seller = require('../models/seller');
const Item = require('../models/item');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.sellerById = (req, res, next, id) => {
    Seller.findById(id).exec((err, seller) => {
        if (err || !seller) {
            return res.status(400).json({
                error: 'Seller does not exist'
            });
        }
        req.seller = seller;
        next();
    });
};

exports.create = (req, res) => {
    const seller = new Seller(req.body);
    seller.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.seller);
};

exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('seller update param', req.params.sellerId);

    const seller = req.seller;
    seller.name = req.body.name;
    seller.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const seller = req.seller;
    Item.find({ seller }).exec((err, data) => {
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete ${seller.name}. It has ${data.length} associated items.`
            });
        } else {
            seller.remove((err, data) => {
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
    Seller.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
