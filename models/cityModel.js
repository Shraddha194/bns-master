var db = require('../dbconnection');
var cities = {
    getAllCities: function (callback) {
        return db.query("select * from bns_city", callback);
    },
    getCityByState: function (state_id, callback) {
        return db.query("select *  from bns_city where state_id=?", [state_id], callback);
    }
};
module.exports = cities;