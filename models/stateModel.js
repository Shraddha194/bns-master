var db = require("../dbconnection");
var states = {
    getAllStates: function (callback) {
        return db.query("select * from bns_state", callback);
    },
    getStateByCountry: function (country_id, callback) {
        return db.query("select * from bns_state where country_id=?", [country_id], callback);
    }
};
module.exports = states;