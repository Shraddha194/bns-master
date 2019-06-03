var express = require("express");
var router = express.Router();
var subscriptionservice = require("../models/HotelSubscriptionService");



//------------------------------ subscription service table --------------------------

router.get("/getservicesbysubscription/:sub_id", function(req, res, next) {
    subscriptionservice.getServicesBySubscription(req.params.sub_id, function(
      err,
      rows
    ) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  
  router.post("/addsubscriptionservice", function(req, res, next) {
    subscriptionservice.addSubscriptionService(req.body, function(err, rows) {
     
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  
  router.delete("/deletesubscriptionservice/:sub_id",function(req,res,next){
    subscriptionservice.deleteSubscriptionService(req.params.sub_id,function(err,rows){
      if(err){
        res.json(err);
        
      }else{
        res.json(rows);
      }
    });
  });

  module.exports=router;