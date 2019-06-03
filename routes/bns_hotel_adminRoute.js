var express = require('express');
var router = express.Router();
var admin = require('../models/bns_hotel_adminModel');

router.get('/', function (req, res, next) {
    admin.getAllAdmins(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.post('/', function (req, res, next) {
    admin.addAdmin(req.body, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows.insertId)
        }
    });
});

router.put('/:hotel_id', function (req, res, next) {
    admin.updateAdmin(req.body, req.params.hotel_id, function (err, rows) {
     
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.delete('/:hotel_id', function (req, res, next) {
    admin.deleteAdmin(req.params.hotel_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }

    });
});

module.exports = router;