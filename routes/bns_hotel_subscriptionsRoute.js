var express = require('express');
var router = express.Router();
var subscription = require("../models/bns_hotel_subscriptionsModel");

router.get('/', function (req, res, next) {
    subscription.getAllSubs(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.get('/:sub_type_id', function (req, res, next) {
    subscription.getSubBySubTypeId(req.params.sub_type_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

module.exports = router;