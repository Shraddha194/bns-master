var db = require("../dbConnection.js");
var subid = 0;
var package = {

  //-------------------------------Queries of table hotel subscription----------------------------------------

  getSubscriptionBySubId: function (sub_id, callback) {
    return db.query(
      "select bhst.sub_type as sub_type,bhs.subscription as subscription,bhst.sub_type_id as sub_type_id, bhs.payable_amt as payable_amt FROM bns_hotel_subscriptions as bhs,bns_hotel_subscription_type as bhst WHERE  bhs.sub_type_id=bhst.sub_type_id and bhs.sub_id = ?",
      [sub_id],
      callback
    );
  },
  getSubscriptionName: function (sub_type_id, callback) {
    return db.query(
      "SELECT bhs.subscription as Package_Name from bns_hotel_subscriptions as bhs WHERE bhs.sub_type_id=?",
      [sub_type_id],
      callback
    );
  },
  addSubscription: function (subscription, callback) {
    return db.query(
      "insert into bns_hotel_subscriptions (subscription,sub_type_id,is_active,payable_amt,created_by,created_at) values (?,?,?,?,?,?)",
      [
        subscription.subscription,
        subscription.sub_type_id,
        subscription.is_active,
        subscription.payable_amt,
        subscription.created_by,
        subscription.created_at
      ],
      callback
    );
  },
  checkSubscription: function (sub_id, callback) {
    return db.query(
      "select bh.sub_id,bh.hotel_name from bns_hotels as bh where bh.sub_id=?",
      [sub_id],
      callback
    );
  },
  updateSubscription: function (sub_id, subscription, callback) {
    return db.query(
      "update bns_hotel_subscriptions bhs set  bhs.subscription=?,bhs.sub_type_id=?, bhs.payable_amt=? where bhs.sub_id=?",
      [
        subscription.subscription,
        subscription.sub_type_id,
        subscription.payable_amt,
        sub_id
      ],
      callback
    );
  },
  deleteSubscription: function (sub_id, callback) {
    return db.query(
      "delete from bns_hotel_subscriptions where sub_id in (?)",
      [sub_id],
      callback
    );
  },

  getSubscriptionDetails: function (callback) {
    return db.query(
      "select bhs.sub_id as sub_id,bhs.subscription as Package_Name, bhs.created_at as Created_On,bu.firstname as Created_By,COUNT(bh.hotel_id) as No_Of_Hotels,bhs.payable_amt as Payable_Amount FROM bns_hotel_subscriptions as bhs, bns_users as bu,bns_hotels as bh WHERE bhs.created_by=bu.id and bh.sub_id = bhs.sub_id GROUP BY bh.sub_id",
      callback
    );
  }


};

module.exports = package;