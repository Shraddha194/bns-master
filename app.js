var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var userRouter = require('./routes/userRoutes');
var hotelServiceRouter = require("./routes/hotelServices");
var hotelSubscriptionType = require("./routes/hotelSubscriptionTypes");
var hotelSubscription = require("./routes/hotelSubscriptions");
var hotelList=require("./routes/hotelLists");
var hotelSubscriptionService=require("./routes/hotelSubscriptionService");
var hotelSubscriptionServiceAudit=require("./routes/hotelSubscriptionServiceAudits");
var countryRouter = require("./routes/countryRoute");
var stateRouter = require("./routes/stateRoute");
var cityRouter = require("./routes/cityRoute");
var hotelRouter = require("./routes/bns_hotelsRoute");
var imageRouter = require("./routes/bns_hotel_imagesRoute");
var adminRouter = require("./routes/bns_hotel_adminRoute");
var subscriptionRouter = require("./routes/bns_hotel_subscriptionsRoute");
var subTypeRouter = require("./routes/bns_hotel_sub_typeRoute");
var subAuditRouter = require("./routes/bns_hotel_sub_auditRoute");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use("/hotelservices", hotelServiceRouter);
app.use("/hotelsubscriptiontype",hotelSubscriptionType);
app.use("/hotelsubscription",hotelSubscription);
app.use("/hotellist",hotelList);
app.use("/hotelsubscriptionservice",hotelSubscriptionService);
app.use("/hotelsubscriptionserviceaudit",hotelSubscriptionServiceAudit);
app.use('/country', countryRouter);
app.use('/state', stateRouter);
app.use('/city', cityRouter);
app.use('/hotel', hotelRouter);
app.use('/image', imageRouter);
app.use('/admin', adminRouter);
app.use('/subscription', subscriptionRouter);
app.use('/sub-type', subTypeRouter);
app.use('/sub-audit', subAuditRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
