var db = require("../dbconnection");

var countries = {
    getAllCountries: function (callback) {
        return db.query("select * from bns_country", callback);

    }
};
module.exports = countries;