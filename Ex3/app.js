var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser=bodyParser.urlencoded({ extended: false});




let courseDetails = require('./controllers/courseDetails.js');
let index = require('./controllers/index.js');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/', index)
app.use('/coursedetails',courseDetails);
app.post('/', urlencodedParser, function(req, res) {
  theCourse.courseID = req.body.courseID;
  theCourse.title = req.body.title;
  theCourse.term = req.body.term;
  theCourse.instructor = req.body.instructor;

res.render('details', {theCourse: req.body});
});



//app.use('/details', details);
app.use('/courseDetails', courseDetails);

app.post('/index', urlencodedParser,  function(req, res){
  if (session.courseID === courseID){
      res.render('details', {qs: req.query});
  } else { 
  console.log(req.body);
  res.render('courseDetails', {data: req.body});
  };
});
app.get('/', function(req, res){
    res.render('details');

});
app.get('/index', function(req, res){
  res.render('index', {qs: req.query});
});
app.get('/*', function(req, res){
  res.render('details');

});
//app.use('/courseDetails', courseDetails);

//app.get('/views/details', function(req,res){
  //  res.render('details', {qs: req.query});

//});
app.listen(8084, '127.0.0.1');
