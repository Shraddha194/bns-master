var express = require('express');
var router = express.Router();
var audit = require('../models/bns_hotel_sub_auditModel')

router.get('/', function (req, res, next) {
    audit.getAllAudits(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.post('/', function (req, res, next) {
    audit.addAudit(req.body, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

module.exports = router