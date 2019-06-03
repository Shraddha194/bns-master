var express = require("express");
var router = express.Router();
var subType = require("../models/bns_hotel_sub_typeModel");

router.get("/", function(req, res, next) {
  subType.getAllSubTypes(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
