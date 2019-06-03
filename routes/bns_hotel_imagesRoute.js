var express = require('express');
var router = express.Router();
var image = require('../models/bns_hotel_imagesModel');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/hotelImages')

    },
    filename: (req, file, cb) => {
        x = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });

router.post('/', upload.single('image_path'), function (req, res, next) {
    image.addImage(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows.insertId)
        }
    });
});

router.get('/', function (req, res, next) {
    image.getAllImages(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.get('/:hotel_id', function (req, res, next) {
    image.getImageByhotel_id(req.params.hotel_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.put('/:hotel_id', upload.single('image_path'), function (req, res, next) {
    image.updateImage(req.body, req.params.hotel_id, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows.affectedRows)
        }
    });
});

router.delete('/:hotel_id', function (req, res, next) {
    image.deleteImage(req.params.hotel_id, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

module.exports = router;