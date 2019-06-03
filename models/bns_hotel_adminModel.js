var db = require('../dbconnection');

var admins = {
    addAdmin: function (hotel, callback) {
        return db.query("insert into bns_hotel_admin (hotel_id,fname,mname,lname,contact_no,email_id,address1_,address2_,landmark_,pincode_,city_id,created_at) values (?,?,?,?,?,?,?,?,?,?,?,?)", [hotel.hotel_id, hotel.fname, hotel.mname, hotel.lname, hotel.contact_no, hotel.email_id, hotel.address1_, hotel.address2_, hotel.landmark_, hotel.pincode_, hotel.city_id, hotel.created_at], callback);
    },

    updateAdmin: function (hotel, hotel_id, callback) {
       
        return db.query("update bns_hotel_admin set fname=?,mname=?,lname=?,contact_no=?,email_id=?,address1_=?,address2_=?,landmark_=?,pincode_=?,city_id=?,created_at=? where hotel_id=?",
            [hotel.fname, hotel.mname, hotel.lname, hotel.contact_no,
            hotel.email_id, hotel.address1_, hotel.address2_, hotel.landmark_, hotel.pincode_,
            hotel.city_id, hotel.created_at, hotel_id], callback);
    },

    getAllAdmins: function (callback) {
        return db.query("select * from bns_hotel_admin", callback);
    },
    deleteAdmin: function (hotel_id, callback) {
        return db.query("delete from bns_hotel_admin where hotel_id=?", [hotel_id], callback);
    }
};

module.exports = admins;