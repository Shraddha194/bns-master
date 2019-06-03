var db = require('../dbconnection');

var subTypes = {
    getAllSubTypes: function (callback) {
        return db.query("select * from bns_hotel_subscription_type", callback);
    }

};

module.exports = subTypes;