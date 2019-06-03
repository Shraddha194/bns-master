var express = require("express");
var router = express.Router();
var subscription = require("../models/HotelList");



router.get("/", function(req, res, next) {
    subscription.getHotelDetails(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });


  module.exports=router;
