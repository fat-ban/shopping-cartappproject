
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-Parser')
const logger = require('morgan');
//const dotenv = require('dotenv')
const expressHbs = require('express-handlebars')
const mongoose = require('mongoose')
const session = require('express-session')
const passport =require('passport')
const flash = require('connect-flash')
const validator = require('express-validator')
const MongoStore = require('connect-mongo')//(session)

const routes = require('./routes/index');
var userRouters = require('./routes/user');

const app = express();
//connection db
require('./database/connection')
require('./config/passport')


//mongoose.connect('localhost:27017/shopping')

// view engine setup
//
app.engine(
  
      ".hbs",
  
      expressHbs({
        defaultLayout: "layout",
  
        runtimeOptions: {
  
          allowProtoPropertiesByDefault: true,
  
          allowProtoMethodsByDefault: true,
         
  
        },
        extname:'.hbs'
      })
  
    );
  
    //app.set("view engine", "handlebars");
//
//app.engine('.hbs', expressHbs({defaultLayout:'layout',extname:'.hbs'}))
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(validator())
app.use(cookieParser());
app.use(session({ 
  secret:'mysupersecret',
  resave:false,
  saveUninitialized:false,
  //store: new MongoStore({ mongooseConnection:mongoose.connection}),
  //store:  MongoStore.create({mongooseConnection:MONGODB_URL}),
  //store: MongoStore.create({ mongoUrl:mongoose.connection}),
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/shopping' }),
  cookie:{maxAge:180 * 60 * 1000}//time of session 180 minute 60 seconds

}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  res.locals.login = req.isAuthenticated()
  res.locals.session = req.session
  next()
})
//order is important
app.use('/user', userRouters);
app.use('/', routes);

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
