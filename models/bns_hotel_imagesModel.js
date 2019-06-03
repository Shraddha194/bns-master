var db = require('../dbconnection');
var images = {
    getImageByhotel_id: function (hotel_id, callback) {
        return db.query("select * from bns_hotel_images where hotel_id=?", [hotel_id], callback);
    },
    getAllImages: function (callback) {
        return db.query("select * from bns_hotel_images", callback);
    },

    addImage: function (hotel, filename, callback) {
        return db.query("insert into bns_hotel_images (hotel_id,image_path,created_by,created_at) values (?,?,?,?)", [hotel.hotel_id, filename, hotel.created_by, hotel.created_at], callback);
    },
    updateImage: function (hotel, hotel_id, filename, callback) {
        return db.query("update bns_hotel_images set image_path=?,created_by=?,created_at=? where hotel_id=?", [filename, hotel.created_by, hotel.created_at, hotel_id], callback);
    },

    updateImageWithoutFile: function (hotel, hotel_id, callback) {
        return db.query("update bns_hotel_images set image_path=?,created_by=?,created_at=? where hotel_id=?", [hotel.image_path, hotel.created_by, hotel.created_at, hotel_id], callback);
    },

    deleteImage: function (hotel_id, callback) {
       
        return db.query("delete from bns_hotel_images where hotel_id=?", [hotel_id], callback);
    }

};
module.exports = images;