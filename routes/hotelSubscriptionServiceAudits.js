var express = require("express");
var router = express.Router();
var subscriptionserviceaudit = require("../models/HotelSubscriptionServiceAudit");

//---------------------router request of subscription service audit------------------------------

router.post("/addsubscriptionserviceaudit", function(req, res, next) {
  subscriptionserviceaudit.addSubscriptionServiceAudit(req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.put("/updatesubsriptionserviceaudit/:sub_id", function(req, res, next) {
    subscriptionserviceaudit.updateSubscriptionServiceAudit(
      req.params.sub_id,
      req.body,
      function(err, rows) {
        if (err) {
         res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  });
  router.delete("/deletesubscriptionserviceaudit/:sub_id",function(req,res,next){
    subscriptionserviceaudit.deleteSubscriptionServiceAudit(req.params.sub_id,function(err,rows){
      if(err){
        res.json(err);
      }else{
        res.json(rows);
      }
    });
  });

  module.exports=router;