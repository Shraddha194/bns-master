var express = require("express");
var router = express.Router();
var services = require("../models/HotelService");

router.get("/", function(req, res, next) {
  services.getAllHotelServices(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:id", function(req, res, next) {
  services.getHotelServicesById(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function(req, res, next) {
  services.addHotelService(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function(req, res, next) {
  services.updateHotelService(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.delete("/:id", function(req, res, next) {
  services.deleteHotelServiceById(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
