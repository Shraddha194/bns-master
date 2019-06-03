var db = require("../dbConnection.js");
var hotelSubscriptionServiceAudit={

    //--------------------Queries of subscription service audit--------------------------

  addSubscriptionServiceAudit: function(subscriptionservice, callback) {
    return db.query(
      "insert into bns_subscription_services_audit (sub_id,service_id,is_active,created_by,created_at) values (?,?,?,?,?)",
      [
        subscriptionservice.sub_id,
        subscriptionservice.service_id,
        subscriptionservice.is_active,
        subscriptionservice.created_by,
        subscriptionservice.created_at
      ],
      callback
    );
  },
  updateSubscriptionServiceAudit: function(sub_id, subscription, callback) {
    return db.query(
      "update bns_subscription_services_audit set service_id=?,is_active=?,created_by=?,created_at=? where sub_id=? ",
      [
        subscription.service_id,
        subscription.is_active,
        subscription.created_by,
        subscription.created_at,
        sub_id
      ],
      callback
    );
  },
  deleteSubscriptionServiceAudit: function(sub_id, callback) {
    return db.query(
      "delete from bns_subscription_services_audit where sub_id in (?)",
      [sub_id],
      callback
    );
  }
};
module.exports=hotelSubscriptionServiceAudit;