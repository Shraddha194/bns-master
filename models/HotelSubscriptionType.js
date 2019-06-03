var db = require("../dbConnection.js");
var subscriptionType = {
  getAllHotelSubscriptionType: function(callback) {
    return db.query(
      "select sub_type_id,sub_type from bns_hotel_subscription_type",
      callback
    );
  },
  getHotelSubscriptionTypeById: function(id, callback) {
    return db.query(
      "select sub_type_id,sub_type from bns_hotel_subscription_type where sub_type_id=?",
      [id],
      callback
    );
  },
  addHotelSubscriptionType: function(subscriptionType, callback) {
    return db.query(
      "insert into bns_hotel_subscription_type (sub_type) values (?)",
      [subscriptionType.sub_type],
      callback
    );
  },
  updateHotelSubscriptionType: function(id, subscriptionType, callback) {
    return db.query(
      "update bns_hotel_subscription_type set sub_type=? where sub_type_id=?",
      [subscriptionType.sub_type,id],
      callback
    );
  },
  deleteHotelSubscriptionType: function(id, callback) {
    return db.query(
      "delete from bns_hotel_subscription_type where sub_type_id=?",
      [id],
      callback
    );
  }
};
module.exports = subscriptionType;
