var express = require("express");
var router = express.Router();
var user = require("../models/user");
var multer = require("multer");
var path = require("path");

 

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/profile");
  },
  filename: (req, file, cb) => {
    x = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({ storage: storage });
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  secure: false,
  service: "gmail",
  auth: {
    user: "rajatshah991@gmail.com",
    pass: "9824053949"
  }
});
router.get("/", function(req, res, next) {
  user.getAllUser(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get("/verifyEmail/:emailId", function(req, res, next) {
  user.getUserEmail(req.params.emailId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/verifyEmail", function(req, res, next) {
  user.getUserEmail(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/sendmail", function(req, res, next) {
 
  sendmail(req.body);
  res.status(201).json({ status: "success" });
});

router.get("/:emailId", function(req, res, next) {
  user.getUserById(req.params.emailId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

function sendmail(emailObj) {
  var mailOptions = {
    from: emailObj.from,
    to: emailObj.to,
    subject: emailObj.subject,
    text: emailObj.text
  };

  transporter.sendMail(mailOptions, function(error, info) {
   
  });
}

router.post("/login", function(req, res, next) {
  user.login(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", upload.single("logo_path"), function(req, res, next) {
  user.signUp(req.body, req.file.filename, function(err, rows) {
    if (err) {
      res.json(err);
    
    } else {
      res.json(rows);
     
    }
  });
});

router.put("/:emailId", function(req, res, next) {
 
  user.forgotPassword(req.params.emailId, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.put("/changePassword/:emailId", function(req, res, next) {
  user.changePassword(req.params.emailId, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get("/getData/:emailId", function(req, res, next) {
  user.getAllUser(req.params.emailId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/fname", function(req, res, next) {
  user.getUserByLogin(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get("/count/hotel", function(req, res, next) {
  
  user.noOfHotel(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get("/count/package", function(req, res, next) {

  user.noOfPackages(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:emailId", function(req, res, next) {
  user.getUserPasswordOnly(req.params.emailId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.put("/updateProfile/:id",function(req,res,next)
{
  user.updateProfile(req.param.id,function(err,rows)
  {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  })
})
router.put("/updateProfileWithoutimage/:id",function(req,res,next)
{
  user.updateProfileWithoutImage(req.params.id,req.body,function(err,rows)
  {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(rows);
    }
  })
})
router.put("/updateProfileWithimage/:id",upload.single('logo_path'),function(req,res,next)
{
  user.updateProfileWithImage(req.body,req.params.id,req.file.filename,function(err,rows)
  {
    console.log("Welcome");
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(rows);
    }
  })
})
module.exports = router;
