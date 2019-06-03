var db = require("../dbConnection.js");
var hotels = {

getHotelDetails: function(callback) {
    return db.query(
      "SELECT bh.hotel_id as Hotel_Id, bh.hotel_name as Hotel_Name, bh.auth_contact_no as Contact_No, bh.sub_from as Subscribed_From, city.name as City, bh.client_status as Status,bhs.subscription as Package_Name, bhst.sub_type as Package_Type,bhst.sub_type_id      FROM bns_hotels as bh, bns_city as city, bns_hotel_subscriptions as bhs,bns_hotel_subscription_type as bhst      WHERE bh.city_id=city.city_id and bh.sub_id=bhs.sub_id and bhs.sub_type_id=bhst.sub_type_id",
      callback
    );
  }
}

module.exports=hotels;