var express = require("express");
var router = express.Router();
var services = require("../models/HotelSubscriptionType");


router.get("/", function(req, res, next) {
  services.getAllHotelSubscriptionType(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get("/:id", function(req, res, next) {
  services.getHotelSubscriptionTypeById(req.params.id,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/",function(req,res,next){
    services.addHotelSubscriptionType(req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
});

router.put("/:id",function(req,res,next){
  services.updateHotelSubscriptionType(req.params.id,req.body,function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});
router.delete("/:id",function(req,res,next){
  services.deleteHotelSubscriptionType(req.params.id,function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
  });
});
module.exports = router;
