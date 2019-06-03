var express = require("express");
var router = express.Router();
var subscription = require("../models/HotelSubscription");
var subid = 0;

//------------------------------router request of hotel subscription----------------------------- 
router.get("/getsubscriptiondetails", function(req, res, next) {
  subscription.getSubscriptionDetails(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/getsubscriptionname/:sub_type_id", function(req, res, next) {
  subscription.getSubscriptionName(req.params.sub_type_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


router.get("/getsubscriptionbyid/:sub_id", function(req, res, next) {
  subscription.getSubscriptionBySubId(req.params.sub_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/checksubscription/:sub_id",function(req,res,next){
  subscription.checkSubscription(req.params.sub_id,function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});
router.post("/addsubscription", function(req, res, next) {
  subscription.addSubscription(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/updatesubscription/:sub_id", function(req, res, next) {
  subid = parseInt(req.params.sub_id);
  subscription.updateSubscription(subid, req.body, function(err, rows) {  
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/deletesubscription/:sub_id",function(req,res,next){
  subscription.deleteSubscription(req.params.sub_id,function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});



module.exports = router;
