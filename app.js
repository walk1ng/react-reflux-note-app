var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('node-jsx').install({extension:'.jsx'});
var App = require('./react/App.jsx');
var React = require('react');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

// render react on server
app.get('/',function(req,res){
	var markup = React.renderComponentToString(App());
	res.send('<!DOCTYPE html>'+markup);
});

// catch 404 and forward to error handler
app.use(function(req,res,next){
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

// error handler

// development error handler
// will print stacktrace
if(app.get('env') === "development"){
	app.use(function(err,req,res,next){
		console.log(err);
		res.status(err.status || 500);
		res.render('error',{
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
if(app.get('env') === "production"){
	app.use(function(err,req,res,next){
		res.status(err.status || 500);
		res.render('error',{
			error: err,
			message: err.message
		});
	});
}

module.exports = app;
