var db = require("../dbConnection.js");
var service = {
  getAllHotelServices: function(callback) {
    return db.query(
      "select service_id,service_name,created_by,created_at from bns_hotel_services",
      callback
    );
  },
  getHotelServicesById: function(id, callback) {
    return db.query(
      "select service_id,service_name,created_by,created_at from bns_hotel_services where service_id=?",
      [id],
      callback
    );
  },
  addHotelService: function(service, callback) {
    return db.query(
      "insert into bns_hotel_services (service_name,created_by,created_at) values (?,?,?)",
      [service.service_name, service.created_by, service.created_at],
      callback
    );
  },
  updateHotelService: function(id, service, callback) {
    return db.query(
      "update bns_hotel_services set service_name=?,created_by=?,created_at=? where service_id=?",
      [service.service_name, service.created_by, service.created_at, id],
      callback
    );
  },
  deleteHotelServiceById: function(id, callback) {
    return db.query(
      "delete from bns_hotel_services where service_id=?",
      [id],
      callback
    );
  }
};
module.exports = service;
