var express = require('express');
var router = express.Router();
var city = require('../models/cityModel');

router.get('/', function (req, res, next) {
    city.getAllCities(function (err, rows) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(rows)
        }
    });
});

router.get('/:state_id', function (req, res, next) {
    city.getCityByState(req.params.state_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

module.exports = router;