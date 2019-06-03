var db = require('../dbconnection');

var audits = {
    addAudit: function (item, callback) {
        return db.query("insert into bns_hotel_subscriptions_audit(sub_id,subscription,sub_type_id,is_active,payable_amt,payable_amt,created_at) values(?,?,?,?,?,?,?)",
            [item.sub_id, item.subscription, item.sub_type_id, item.is_active, item.payable_amt,
            item.payable_amt, item.created_at], callback);
    },
    getAllAudits: function (callback) {
        return db.query("select * from bns_hotel_subscriptions_audit", callback);
    }
};

module.exports = audits;