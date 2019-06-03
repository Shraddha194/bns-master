var db = require('../dbconnection');
var subs = {
    getAllSubs: function (callback) {
        return db.query("select * from bns_hotel_subscriptions", callback);
    },
    getSubBySubTypeId: function (sub_type_id, callback) {
        return db.query("select * from bns_hotel_subscriptions where sub_type_id=?", [sub_type_id], callback);
    }
};

module.exports = subs;