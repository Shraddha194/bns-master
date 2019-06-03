var db = require('../dbconnection');
var hotels = {

    // getAllHotels: function (callback) {
    //     return db.query("select * from bns_hotels", callback);
    // },
    // getHotelById: function (hotel_id, callback) {
    //     return db.query("select * from bns_hotels where hotel_id=?", [hotel_id], callback);
    // },

    getAllHotels: function (callback) {
        return db.query("select H.hotel_id,hotel_name,auth_contact_no,H.sub_id,sub_from,sub_to,H.city_id,status_id,client_status,owner_name,email_,category_,group_name,copyright_by,ownership_type,address_,landmark_,pincode_,website_,logo_path,contact_fname,contact_lname,contact_designation_,contact_email_,contact_number,H.created_by,image_path,subscription,bns_hotel_subscriptions.sub_type_id,sub_type,E.name city_name,D.name state_name,S.name country_name,E.state_id,D.country_id from bns_hotels H,bns_hotel_images,bns_hotel_subscriptions,bns_hotel_subscription_type,bns_city E,bns_state D,bns_country S where  H.hotel_id=bns_hotel_images.hotel_id and H.sub_id=bns_hotel_subscriptions.sub_id and bns_hotel_subscriptions.sub_type_id=bns_hotel_subscription_type.sub_type_id AND E.city_id=H.city_id and D.state_id = E.state_id and S.country_id=D.country_id", callback);
    },

    getHotelById: function (hotel_id, callback) {
        return db.query("select H.hotel_id,hotel_name,auth_contact_no,H.sub_id,sub_from,sub_to,H.city_id,status_id,client_status,owner_name,email_,category_,group_name,copyright_by,ownership_type,address_,landmark_,pincode_,website_,logo_path,contact_fname,contact_lname,contact_designation_,contact_email_,contact_number,H.created_by,image_path,subscription,payable_amt,sub_type,bns_hotel_subscriptions.sub_type_id,E.name city_name,D.name state_name,S.name country_name,E.state_id,D.country_id from bns_hotels H,bns_hotel_images,bns_hotel_subscriptions,bns_hotel_subscription_type,bns_city E,bns_state D,bns_country S where H.hotel_id=? and H.hotel_id=bns_hotel_images.hotel_id and H.sub_id=bns_hotel_subscriptions.sub_id and bns_hotel_subscriptions.sub_type_id=bns_hotel_subscription_type.sub_type_id AND E.city_id=H.city_id and D.state_id = E.state_id and S.country_id=D.country_id", [hotel_id], callback);
    },

    addHotel: function (item, filename, callback) {
        
        return db.query("insert into bns_hotels (hotel_name,auth_contact_no,sub_id,sub_from,sub_to,city_id,status_id,client_status,owner_name,email_,category_,group_name,copyright_by,ownership_type,address_,landmark_,pincode_,website_,logo_path,contact_fname,contact_lname,contact_designation_,contact_email_,contact_number,created_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [item.hotel_name, item.auth_contact_no, item.sub_id, item.sub_from,
            item.sub_to, item.city_id, item.status_id, item.client_status, item.owner_name,
            item.email_, item.category_, item.group_name, item.copyright_by, item.ownership_type,
            item.address_, item.landmark_, item.pincode_, item.website_, filename,
            item.contact_fname, item.contact_lname, item.contact_designation_, item.contact_email_, item.contact_number,
            item.created_by], callback);
    },

    deleteOneHotel: function (hotel_id, callback) {
        //       db.query("delete  from  where hotel_id=?", hotel_id);
        return db.query("delete from bns_hotels where hotel_id=?", [hotel_id], callback);
        // return db.query("delete bns_hotels,bns_hotel_images from bns_hotels inner join bns_hotel_images on bns_hotel_images.hotel_id=bns_hotels.hotel_id where bns_hotels.hotel_id=?) ", hotel_id, callback);
    },

    updateHotel: function (item, hotel_id, filename, callback) {
        return db.query("update bns_hotels set hotel_name=?,auth_contact_no=?,sub_id=?,sub_from=?,sub_to=?,city_id=?,status_id=?,client_status=?,owner_name=?,email_=?,category_=?,group_name=?,copyright_by=?,ownership_type=?,address_=?,landmark_=?,pincode_=?,website_=?,logo_path=?,contact_fname=?,contact_lname=?,contact_designation_=?,contact_email_=?,contact_number=?,created_by=? where hotel_id=?",
            [item.hotel_name, item.auth_contact_no, item.sub_id, item.sub_from,
            item.sub_to, item.city_id, item.status_id, item.client_status, item.owner_name,
            item.email_, item.category_, item.group_name, item.copyright_by, item.ownership_type,
            item.address_, item.landmark_, item.pincode_, item.website_, filename,
            item.contact_fname, item.contact_lname, item.contact_designation_, item.contact_email_, item.contact_number,
            item.created_by, hotel_id], callback);
    },

    updateHotelWithoutLogo: function (item, hotel_id, callback) {
        return db.query("update bns_hotels set hotel_name=?,auth_contact_no=?,sub_id=?,sub_from=?,sub_to=?,city_id=?,status_id=?,client_status=?,owner_name=?,email_=?,category_=?,group_name=?,copyright_by=?,ownership_type=?,address_=?,landmark_=?,pincode_=?,website_=?,logo_path=?,contact_fname=?,contact_lname=?,contact_designation_=?,contact_email_=?,contact_number=?,created_by=? where hotel_id=?",
            [item.hotel_name, item.auth_contact_no, item.sub_id, item.sub_from,
            item.sub_to, item.city_id, item.status_id, item.client_status, item.owner_name,
            item.email_, item.category_, item.group_name, item.copyright_by, item.ownership_type,
            item.address_, item.landmark_, item.pincode_, item.website_, item.logo_path,
            item.contact_fname, item.contact_lname, item.contact_designation_, item.contact_email_, item.contact_number,
            item.created_by, hotel_id], callback);
    }

};
module.exports = hotels;