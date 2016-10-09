var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    footer: 'This is a footer' });
});
router.get('/about',function(req,res,next){
  res.render('about',{
    title: 'About'
  });
});

router.get('/contact',function(req,res,next){
  res.render('contact',{
    title: 'Contact'
  });
});

router.post('/contact/send',function(req,res,next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'Email address',
      pass: 'your password'
    }
  });
  var mailOptions = {
    from:'',
    to: 'Email address',
    subject: 'Website submission',
    text: 'You have got a new submission with the following details , Name: '+ req.body.name +' Email: '+ req.body.email + ' Message : '+ req.body.message ,
    html: '<p>You have got a new submission with the following details </p><ul><li>Name: '+ req.body.name + '</li><li>Email: '+ req.body.email + '</li><li>Message: '+ req.body.message +'</li></ul>'
  }
  transporter.sendMail(mailOptions,function(err,info){
    if(err)
    {
      console.log(err);
      res.redirect('/');
    }else
    {
      console.log("Message sent"+info);
      res.redirect('/');
    }
  });
  
});
module.exports = router;
