var db = require("../dbConnection.js");
var hotelSubscriptionService={
    
  //----------------------------get request for package list and no of hotels displayed---------------------------

  
  getServicesBySubscription: function(sub_id, callback) {
    return db.query(
      "SELECT bhser.service_id, bhser.service_name FROM bns_hotel_subscriptions as bhs, bns_subscription_services as bss, bns_hotel_services as bhser where bhs.sub_id=bss.sub_id AND bss.service_id=bhser.service_id and bhs.sub_id=?",
      [sub_id],
      callback
    );
  },
  addSubscriptionService: function(hotelSubscriptionService, callback) {
    return db.query(
      "insert into bns_subscription_services (sub_id,service_id,is_active,created_by,created_at) values (?,?,?,?,?)",
      [
        hotelSubscriptionService.sub_id,
        hotelSubscriptionService.service_id,
        hotelSubscriptionService.is_active,
        hotelSubscriptionService.created_by,
        hotelSubscriptionService.created_at
      ],
      callback
    );
  },

  deleteSubscriptionService: function(sub_id, callback) {
    return db.query(
      "delete from bns_subscription_services where sub_id in (?)",
      [sub_id],
      callback
    );
  }

};

module.exports=hotelSubscriptionService;