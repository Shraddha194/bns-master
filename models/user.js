var db = require("../dbConnection");
var crypto = require("crypto");
var ReverseMd5 = require("reverse-md5");
var generator = require('generate-password');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testbns1234@gmail.com',
    pass: 'Test@1234'
  }
});


var user = {
  login: function(item, callback) {
    return db.query(
      "select emailId,password from bns_users where emailId=? and password=?",
      [
        item.emailId,
        crypto
          .createHash("md5")
          .update(item.password)
          .digest("hex")
      ],
      callback
    );
  },

  signUp: function(item, filename, callback) {
    
    return db.query(
      "insert into bns_users values(?,?,?,?,?,?,?)",
      [
        item.id,
        item.firstname,
        item.lastname,
        item.emailId,
        item.contactno,
        crypto
          .createHash("md5")
          .update(item.password)
          .digest("hex"),
        filename
      ],
      callback
    );
  },

  getUserEmail: function(item, callback) {
    return db.query(
      "select emailId from bns_users where emailId=?",
      [item.emailId],
      callback
    );
  },
  sendUserEmail: function(item, callback) {
 
    var mailOptions = {
      from: item.from,
      to: item.to,
      subject: item.subject,
      text: item.text
    };
    return (
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
        console.log('error')
        } else {
          console.log("Email sent: " + info.response);
        }
      }),
      callback
    );
  },

  forgotPassword: function(emailId, item, callback) {
    var password = generator.generate({
      length: 10,
      numbers: true
  });

  var mailOptions = {
    from: "rajatshah991@gmail.com",
    to: emailId,
    subject: "Password",
    text: "Your random Password -"+password
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  })
    return db.query(
      "update bns_users set password=? where emailId=? ",
      [
        crypto
          .createHash("md5")
          .update(password)
          .digest("hex"),
        emailId
      ],
      callback
    );
  },
  changePassword: function(emailId, item, callback) {
    return db.query(
      "update bns_users set password=? where emailId=? and password=? ",
      [
        crypto
          .createHash("md5")
          .update(item.password)
          .digest("hex"),
        emailId,
        crypto
          .createHash("md5")
          .update(item.oldPassword)
          .digest("hex")
      ],
      callback
    );
  },

  getUserById: function(emailId, callback) {
    return db.query(
      "select id,firstname,lastname,emailId,contactno,password,created_Date,logo_path from bns_users where emailId=?",
      [emailId],
      callback
    );
  },

  getAllUser: function(emailId, callback) {
    return db.query(
      "select id,firstname,lastname,emailId,contactno,password,created_Date from bns_users where emailId=?",
      [emailId],
      callback
    );
  },

  getUserByLogin: function(item, callback) {
    
    return db.query(
      "select id, firstname,lastname,emailId,contactno,password,logo_path from bns_users where emailId=?",
      [item.emailId],
      callback
    );
  },
  noOfHotel: function(callback) {
    
    return db.query("SELECT COUNT(*) as hotelcount FROM bns_hotels", callback);
  },

  noOfPackages: function(callback) {
    return db.query("SELECT COUNT(*) as packagecount FROM bns_hotel_subscriptions", callback);
  },
  getUserPasswordOnly: function(emailId, callback) {
    return db.query(
      "select password from bns_users where emailId=?",
      [emailId],
      callback
    );
  },
  getUserEmail: function(item, callback) {
    return db.query(
      "select emailId from bns_users where emailId=?",
      [item.emailId],
      callback
    );
  },
  updateProfileWithoutImage:function(id,item,callback)
  {

    return db.query("update bns_users set firstname=?,lastname=?,emailId=?,contactno=? where id=?",[item.firstname,item.lastname,item.emailId,item.contactno,id],callback)
  },
  updateProfileWithImage:function(item,id,filename,callback)
  {
 
    return db.query("update bns_users set firstname=?,lastname=?,emailId=?,contactno=?,logo_path=? where id=?",[item.firstname,item.lastname,item.emailId,item.contactno,filename,id],callback)
  }
};
module.exports = user;
