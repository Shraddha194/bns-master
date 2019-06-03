var express = require("express");
var router = express.Router();
var state = require("../models/stateModel");

router.get('/', function (req, res, next) {
    state.getAllStates(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});
router.get('/:country_id', function (req, res, next) {
    state.getStateByCountry(req.params.country_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

module.exports = router;