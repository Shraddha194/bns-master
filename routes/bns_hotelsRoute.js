var express = require('express');
var router = express.Router();
var hotel = require('../models/bns_hotelsModel');
var multer = require('multer');
var path = require('path');
var temp = false;

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')

    },
    filename: (req, file, cb) => {
        x = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });
router.post('/', upload.single('logo_path'), function (req, res, next) {
    
    hotel.addHotel(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows.insertId)
        }
    });
});

router.get('/', function (req, res, next) {
    hotel.getAllHotels(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.get('/:hotel_id', function (req, res, next) {
    hotel.getHotelById(req.params.hotel_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.delete('/:hotel_id', function (req, res, next) {
    hotel.deleteOneHotel(req.params.hotel_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});
router.put('/without/:hotel_id', function (req, res, next) {
    hotel.updateHotelWithoutLogo(req.body, req.params.hotel_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows.affectedRows)
        }
    });
});

router.put('/:hotel_id', upload.single('logo_path'), function (req, res, next) {
    hotel.updateHotel(req.body, req.params.hotel_id, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows.insertId)
        }
    });
});
// upload.single('logo_path'),

// router.put('/:hotel_id',upload.single('logo_path') ,function (req, res, next) {
//     if (temp) {
//         hotel.updateHotel(req.body, req.params.hotel_id, req.file.filename, function (err, rows) {
//             if (err) {
//                 res.json(err)
//             } else {
//                 res.json(rows)
//             }
//         });
//     } else {
//         hotel.updateHotelWithoutLogo(req.body, req.params.hotel_id, function (err, rows) {
//             if (err) {
//                 res.json(err)
//             } else {
//                 res.json(rows)
//             }
//         });
//     }
// });



module.exports = router;

