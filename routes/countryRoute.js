var express = require('express');
var router = express.Router();
var country = require('../models/countryModel');

router.get('/', function (req, res, next) {
    country.getAllCountries(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

module.exports = router;